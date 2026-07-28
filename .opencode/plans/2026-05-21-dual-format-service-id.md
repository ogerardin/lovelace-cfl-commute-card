# Dual Format Support (service_id) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the lovelace card work seamlessly with both old and new ha-cfl-commute sensor formats, where `train_number` changed from a product name string ("RE 4632") to a 1-based integer index, and the product name moved to a new `service_id` attribute.

**Architecture:** Use `service_id` as the primary source for display logic (category, number) when available, falling back to `train_number` for backward compatibility. For entity ID construction, detect the format and use integer-based indexing when `train_number` is a string (old format).

**Tech Stack:** Lit web components, plain JavaScript (no TypeScript), Rollup build.

---

## Format Reference

| Attribute | Old format | New format |
|-----------|-----------|------------|
| `train_number` (in `all_trains`) | `"RE 4632"` | `1` (integer) |
| `service_id` | *absent* | `"RE 4632"` |
| `train_number` (individual train sensor) | `"RE 4632"` | `1` (integer) |
| `service_id` (individual train sensor) | *absent* | `"RE 4632"` |

The real entity IDs are always `sensor.{name}_train_1`, `sensor.{name}_train_2`, etc. (1-based integer index).

---

### Task 1: Update `getTrainCategory()` to use `service_id`

**Files:**
- Modify: `src/utils.js:173-188`

The function must prefer `service_id` for category detection (new format), then fall back to `train_number` (old format).

- [ ] **Step 1: Update `getTrainCategory()` implementation**

Replace the existing function at `src/utils.js:173-188` with:

```javascript
export function getTrainCategory(train) {
  if (!train) return '';
  if (train.train_category) return train.train_category;
  if (train.service_type) return train.service_type;
  const serviceId = train.service_id || train.train_number;
  if (serviceId) {
    const num = String(serviceId);
    if (num.startsWith('IC')) return 'IC';
    if (num.startsWith('RE')) return 'RE';
    if (num.startsWith('RB')) return 'RB';
    if (num.startsWith('TER')) return 'TER';
    if (num.startsWith('TGV')) return 'TGV';
    if (num.startsWith('ICE')) return 'ICE';
    if (num.startsWith('RJ')) return 'RJ';
  }
  return '';
}
```

Key change: `const serviceId = train.service_id || train.train_number` — uses `service_id` when available (new format), falls back to `train_number` (old format). The `train_number` integer in new format (e.g. `1`) won't match any prefix, so it gracefully falls through to `''`.

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: successful build with no errors.

---

### Task 2: Update `getTrainNumber()` to use `service_id`

**Files:**
- Modify: `src/utils.js:195-206`

The function must extract the numeric part from `service_id` (new format), falling back to `train_number` (old format), then `train_id` regex.

- [ ] **Step 1: Update `getTrainNumber()` implementation**

Replace the existing function at `src/utils.js:195-206` with:

```javascript
export function getTrainNumber(train) {
  if (!train) return '';
  const serviceId = train.service_id || train.train_number;
  if (serviceId) {
    const num = String(serviceId);
    const digits = num.replace(/^[A-Z]+\s*/, '');
    if (digits && digits !== num) return digits;
  }
  if (train.train_id) {
    const match = train.train_id.match(/train[_-]?(\d+)$/i);
    if (match) return match[1];
  }
  return '';
}
```

Key changes:
- `const serviceId = train.service_id || train.train_number` — checks `service_id` first.
- `num.replace(/^[A-Z]+\s*/, '')` strips the category prefix and optional space (e.g. `"RE 4632"` → `"4632"`).
- `digits !== num` guard: if `train_number` is a bare integer like `"1"` (new format without `service_id`), the regex won't change it, so we skip it — the index is not a service number.
- The `train_id` regex fallback still works for both formats.

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: successful build with no errors.

---

### Task 3: Fix entity ID construction for old format in `all_trains` path

**Files:**
- Modify: `src/cfl-commute-card.js:295-303`

The current `rawNum` logic mangles `"RE 4632"` into `"re_4632"` which produces wrong entity IDs. With the new format (integer `train_number`), it already works. We need to detect the format and use `index + 1` when `train_number` is not a pure integer.

- [ ] **Step 1: Update the `all_trains` mapping in the `set hass()` method**

Replace lines 295-303 in `src/cfl-commute-card.js`:

```javascript
      this._trains = activeEntity.attributes.all_trains.map((train, index) => {
        const rawNum = (/^\d+$/.test(String(train.train_number)))
          ? String(train.train_number)
          : String(index + 1);
        return {
          ...train,
          train_id: `sensor.${baseName}_train_${rawNum}`,
          platform: train.platform || ''
        };
      });
```

Key change: if `train_number` is a pure integer string (new format), use it directly. Otherwise (old format: string like `"RE 4632"`), use `index + 1` which matches the actual entity naming convention.

This also passes `service_id` through automatically via `...train` spread.

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: successful build with no errors.

---

### Task 4: Add `service_id` to the individual sensor fallback path

**Files:**
- Modify: `src/cfl-commute-card.js:464-497`

The `_getTrainsFromIndividualSensors` method constructs train objects from individual sensor attributes. It must also read `service_id` so that `getTrainCategory()` and `getTrainNumber()` work when data comes through this path.

- [ ] **Step 1: Add `service_id` field to the train object in `_getTrainsFromIndividualSensors`**

In the train object construction (line 464-497), add the `service_id` field after `service_type` (around line 496):

```javascript
        service_type: entity.attributes.service_type ||
                     entity.attributes.type || '',
        service_id: entity.attributes.service_id ||
                   entity.attributes.train_number || ''
```

The `service_id` falls back to `train_number` for old-format sensors where `service_id` doesn't exist yet and `train_number` still holds the product name.

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: successful build with no errors.

---

### Task 5: Final verification build

- [ ] **Step 1: Clean build**

Run: `npm run build`
Expected: successful build with no errors.

- [ ] **Step 2: Verify the dist output exists**

Run: `ls -la dist/cfl-commute-card.js`
Expected: file exists with recent timestamp.

- [ ] **Step 3: Commit**

```bash
git add src/utils.js src/cfl-commute-card.js dist/cfl-commute-card.js
git commit -m "feat: support both old and new train_number formats with service_id"
```

---

## Behavior Matrix

| Scenario | `train_number` | `service_id` | `getTrainCategory()` | `getTrainNumber()` | Entity ID |
|----------|---------------|-------------|---------------------|-------------------|-----------|
| Old `all_trains` | `"RE 4632"` | absent | `"RE"` (from `train_number`) | `"4632"` (from `train_number`) | `sensor.{base}_train_1` (index) |
| New `all_trains` | `1` | `"RE 4632"` | `"RE"` (from `service_id`) | `"4632"` (from `service_id`) | `sensor.{base}_train_1` (int) |
| Old individual sensor | `"RE 4632"` | absent | `"RE"` (from fallback `train_number`) | `"4632"` (same) | entity ID from sensor |
| New individual sensor | `1` | `"RE 4632"` | `"RE"` (from `service_id`) | `"4632"` (from `service_id`) | entity ID from sensor |

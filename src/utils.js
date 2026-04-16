/**
 * Utility functions for CFL Commute Card
 */

/**
 * Format ISO time string or HH:MM to HH:MM
 * @param {string} timeStr - ISO time string or already formatted HH:MM
 * @returns {string} Formatted time (HH:MM)
 */
export function formatTime(timeStr) {
  if (!timeStr || timeStr === 'unknown' || timeStr === 'Unknown') return '—';

  const str = String(timeStr).trim();
  if (!str) return '—';

  const timeMatch = str.match(/(\d{1,2}):(\d{2})(?::\d{2})?/);
  if (timeMatch) {
    return `${timeMatch[1].padStart(2, '0')}:${timeMatch[2]}`;
  }

  try {
    const date = new Date(str);
    if (isNaN(date.getTime())) return str;

    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  } catch (e) {
    console.warn('formatTime: could not parse time value:', str, e);
    return str;
  }
}

function _isUnknownDelay(train) {
  if (!train || !train.expected_departure) return false;
  if (train.expected_departure === train.scheduled_departure) return false;
  return !/\d{1,2}:\d{2}/.test(train.expected_departure);
}

/**
 * Get status class for a train based on its state
 * @param {Object} train - Train object
 * @returns {string} CSS class name
 */
export function getStatusClass(train) {
  if (!train) return 'unknown';

  if (train.is_cancelled) return 'cancelled';
  if (train.is_no_service) return 'no-service';
  if (train.delay_minutes >= 10) return 'major-delay';
  if (train.delay_minutes > 0) return 'minor-delay';
  if (_isUnknownDelay(train)) return 'minor-delay';
  return 'on-time';
}

/**
 * Filter trains based on configuration
 * @param {Array} trains - Array of train objects
 * @param {Object} config - Card configuration
 * @returns {Array} Filtered trains
 */
export function filterTrains(trains, config) {
  if (!trains || trains.length === 0) return [];

  let filtered = [...trains];

  if (config.hide_on_time_trains) {
    filtered = filtered.filter(train =>
      train.is_cancelled || train.is_no_service || train.delay_minutes > 0 || _isUnknownDelay(train)
    );
  }

  if (config.min_delay_to_show > 0) {
    filtered = filtered.filter(train =>
      train.is_cancelled || train.is_no_service || _isUnknownDelay(train) || train.delay_minutes >= config.min_delay_to_show
    );
  }

  return filtered;
}

/**
 * Sort trains by scheduled departure time
 * @param {Array} trains - Array of train objects
 * @returns {Array} Sorted trains
 */
export function sortTrains(trains) {
  if (!trains || trains.length === 0) return [];

  return [...trains].sort((a, b) => {
    const timeA = new Date(a.scheduled_departure).getTime();
    const timeB = new Date(b.scheduled_departure).getTime();
    const aValid = !isNaN(timeA);
    const bValid = !isNaN(timeB);
    if (!aValid && !bValid) return 0;
    if (!aValid) return 1;
    if (!bValid) return -1;
    return timeA - timeB;
  });
}

/**
 * Check if train should be filtered based on disruption settings
 * @param {boolean} hasDisruption - Whether there's disruption
 * @param {boolean} onlyShowDisrupted - Config setting
 * @returns {boolean} Whether to show trains
 */
export function shouldShowTrains(hasDisruption, onlyShowDisrupted) {
  if (!onlyShowDisrupted) return true;
  return hasDisruption;
}

/**
 * Format calling points with bullet separator
 * @param {Array} points - Array of station names
 * @param {number} maxPoints - Maximum number of points to display
 * @returns {string} Formatted calling points string
 */
export function formatCallingPointsDots(points, maxPoints = 999) {
  if (!points || points.length === 0) return '';
  const display = points.slice(0, maxPoints);
  const remaining = points.length - maxPoints;
  let text = display.join(' • ');
  if (remaining > 0) {
    text += ` +${remaining}`;
  }
  return text;
}

/**
 * Get train category from train data (RE, IC, RB, etc.)
 * @param {Object} train - Train object
 * @returns {string} Train category
 */
export function getTrainCategory(train) {
  if (!train) return '';
  if (train.train_category) return train.train_category;
  if (train.service_type) return train.service_type;
  if (train.train_number) {
    const num = String(train.train_number);
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

/**
 * Get train number (numeric part) from train data
 * @param {Object} train - Train object
 * @returns {string} Train number
 */
export function getTrainNumber(train) {
  if (!train) return '';
  if (train.train_number) {
    const num = String(train.train_number);
    return num.replace(/^[A-Z]+/, '');
  }
  if (train.train_id) {
    const match = train.train_id.match(/train[_-]?(\d+)$/i);
    if (match) return match[1];
  }
  return '';
}
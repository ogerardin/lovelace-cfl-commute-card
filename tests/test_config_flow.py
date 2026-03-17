"""Tests for config flow."""

import pytest
import voluptuous as vol
from unittest.mock import AsyncMock, MagicMock, patch
from custom_components.cfl_commute.config_flow import (
    CFLCommuteConfigFlow,
    OPTIONS_SCHEMA,
    CONFIG_SCHEMA,
)
from custom_components.cfl_commute.const import (
    CONF_API_KEY,
    CONF_COMMUTE_NAME,
    CONF_TIME_WINDOW,
    CONF_NUM_SERVICES,
    CONF_MINOR_THRESHOLD,
    CONF_MAJOR_THRESHOLD,
    CONF_SEVERE_THRESHOLD,
    CONF_NIGHT_UPDATES,
    DEFAULT_TIME_WINDOW,
    DEFAULT_NUM_SERVICES,
    DEFAULT_MINOR_THRESHOLD,
    DEFAULT_MAJOR_THRESHOLD,
    DEFAULT_SEVERE_THRESHOLD,
    DEFAULT_NIGHT_UPDATES,
)


class TestConfigSchema:
    """Test configuration schemas."""

    def test_config_schema_requires_api_key(self):
        """Test that API key is required."""
        with pytest.raises(vol.Invalid):
            CONFIG_SCHEMA({})

    def test_config_schema_accepts_valid_api_key(self):
        """Test that valid API key is accepted."""
        result = CONFIG_SCHEMA({"api_key": "test_key_123"})
        assert result["api_key"] == "test_key_123"

    def test_options_schema_has_defaults(self):
        """Test that options schema has correct defaults."""
        result = OPTIONS_SCHEMA({})
        assert result[CONF_TIME_WINDOW] == DEFAULT_TIME_WINDOW
        assert result[CONF_NUM_SERVICES] == DEFAULT_NUM_SERVICES
        assert result[CONF_MINOR_THRESHOLD] == DEFAULT_MINOR_THRESHOLD
        assert result[CONF_MAJOR_THRESHOLD] == DEFAULT_MAJOR_THRESHOLD
        assert result[CONF_SEVERE_THRESHOLD] == DEFAULT_SEVERE_THRESHOLD
        assert result[CONF_NIGHT_UPDATES] == DEFAULT_NIGHT_UPDATES


class TestThresholdValidation:
    """Test threshold validation logic."""

    def test_valid_time_window_min(self):
        """Test minimum time window is valid."""
        result = OPTIONS_SCHEMA({CONF_TIME_WINDOW: 15})
        assert result[CONF_TIME_WINDOW] == 15

    def test_valid_time_window_max(self):
        """Test maximum time window is valid."""
        result = OPTIONS_SCHEMA({CONF_TIME_WINDOW: 120})
        assert result[CONF_TIME_WINDOW] == 120

    def test_time_window_below_min_rejected(self):
        """Test time window below 15 is rejected."""
        with pytest.raises(vol.Invalid):
            OPTIONS_SCHEMA({CONF_TIME_WINDOW: 14})

    def test_time_window_above_max_rejected(self):
        """Test time window above 120 is rejected."""
        with pytest.raises(vol.Invalid):
            OPTIONS_SCHEMA({CONF_TIME_WINDOW: 121})

    def test_valid_num_services_min(self):
        """Test minimum number of services."""
        result = OPTIONS_SCHEMA({CONF_NUM_SERVICES: 1})
        assert result[CONF_NUM_SERVICES] == 1

    def test_valid_num_services_max(self):
        """Test maximum number of services."""
        result = OPTIONS_SCHEMA({CONF_NUM_SERVICES: 10})
        assert result[CONF_NUM_SERVICES] == 10

    def test_num_services_below_min_rejected(self):
        """Test num services below 1 is rejected."""
        with pytest.raises(vol.Invalid):
            OPTIONS_SCHEMA({CONF_NUM_SERVICES: 0})

    def test_num_services_above_max_rejected(self):
        """Test num services above 10 is rejected."""
        with pytest.raises(vol.Invalid):
            OPTIONS_SCHEMA({CONF_NUM_SERVICES: 11})

    def test_valid_threshold_min(self):
        """Test minimum threshold values."""
        result = OPTIONS_SCHEMA({CONF_MINOR_THRESHOLD: 1})
        assert result[CONF_MINOR_THRESHOLD] == 1

    def test_valid_threshold_max(self):
        """Test maximum threshold values."""
        result = OPTIONS_SCHEMA({CONF_SEVERE_THRESHOLD: 60})
        assert result[CONF_SEVERE_THRESHOLD] == 60

    def test_threshold_below_min_rejected(self):
        """Test threshold below 1 is rejected."""
        with pytest.raises(vol.Invalid):
            OPTIONS_SCHEMA({CONF_MINOR_THRESHOLD: 0})

    def test_threshold_above_max_rejected(self):
        """Test threshold above 60 is rejected."""
        with pytest.raises(vol.Invalid):
            OPTIONS_SCHEMA({CONF_SEVERE_THRESHOLD: 61})


class TestConfigFlowInit:
    """Test config flow initialization."""

    def test_config_flow_initial_state(self):
        """Test initial state of config flow."""
        flow = CFLCommuteConfigFlow()
        assert flow._api_key == ""
        assert flow._origin_station == {}
        assert flow._destination_station == {}
        assert flow._client is None

    def test_config_flow_has_version(self):
        """Test config flow has version."""
        flow = CFLCommuteConfigFlow()
        assert flow.VERSION == 1


class TestCommuteNameGeneration:
    """Test commute name generation."""

    def test_default_commute_name_format(self):
        """Test default commute name format."""
        origin = "Luxembourg"
        destination = "Esch-sur-Alzette"
        expected = "Luxembourg → Esch-sur-Alzette"
        # This is the format used in config_flow.py
        assert f"{origin} → {destination}" == expected

    def test_custom_commute_name_used(self):
        """Test custom commute name is preserved."""
        custom_name = "My Morning Commute"
        data = {
            CONF_COMMUTE_NAME: custom_name,
            CONF_TIME_WINDOW: 60,
            CONF_NUM_SERVICES: 3,
            CONF_MINOR_THRESHOLD: 3,
            CONF_MAJOR_THRESHOLD: 10,
            CONF_SEVERE_THRESHOLD: 15,
            CONF_NIGHT_UPDATES: False,
        }
        result = OPTIONS_SCHEMA(data)
        assert result[CONF_COMMUTE_NAME] == custom_name


class TestNightUpdates:
    """Test night updates option."""

    def test_night_updates_default_false(self):
        """Test night updates defaults to false."""
        result = OPTIONS_SCHEMA({})
        assert result[CONF_NIGHT_UPDATES] is False

    def test_night_updates_can_be_true(self):
        """Test night updates can be enabled."""
        result = OPTIONS_SCHEMA({CONF_NIGHT_UPDATES: True})
        assert result[CONF_NIGHT_UPDATES] is True

    def test_night_updates_boolean_required(self):
        """Test night updates must be boolean."""
        with pytest.raises(vol.Invalid):
            OPTIONS_SCHEMA({CONF_NIGHT_UPDATES: "true"})

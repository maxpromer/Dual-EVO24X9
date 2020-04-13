#ifndef __DUAL_EVO24X9_CPP__
#define __DUAL_EVO24X9_CPP__

#include "dualevo24x9.h"

DualEVO24X9::DualEVO24X9(int bus_ch, int dev_addr) {
	channel = bus_ch;
	address = dev_addr;
	polling_ms = 100;
}

void DualEVO24X9::init(void) {
	
	
	state = s_detect;
}

int DualEVO24X9::prop_count(void) {
	// not supported
	return 0;
}

bool DualEVO24X9::prop_name(int index, char *name) {
	// not supported
	return false;
}

bool DualEVO24X9::prop_unit(int index, char *unit) {
	// not supported
	return false;
}

bool DualEVO24X9::prop_attr(int index, char *attr) {
	// not supported
	return false;
}

bool DualEVO24X9::prop_read(int index, char *value) {
	// not supported
	return false;
}

bool DualEVO24X9::prop_write(int index, char *value) {
	// not supported
	return false;
}
// --------------------------------------

void DualEVO24X9::process(Driver *drv) {
	I2CDev *i2c = (I2CDev *)drv;
	switch (state) {
		case s_detect: {
			// detect i2c device
			if (i2c->detect(channel, address) == ESP_OK) {
				uint8_t buff[] = { 0x83, 0x0, 0x01 };
				esp_err_t ret = i2c->write(channel, address, buff, 3);

				// error flag
				error = ret == ESP_OK ? false : true;
				// initialized flag
				initialized = ret == ESP_OK ? true : false;
			} else {
				// set error flag
				error = true;
				// clear initialized flag
				initialized = false;
			}
			
			// get current tickcnt
			tickcnt = get_tickcnt();
			// goto wait and retry with detect state
			state = s_wait;
			
			break;
		}
		
		case s_wait:
			// wait polling_ms timeout
			if (is_tickcnt_elapsed(tickcnt, polling_ms)) {
				state = s_detect;
			}
			break;
	}
}

// Method
bool DualEVO24X9::motor(uint8_t ch, uint8_t dir, uint8_t speed) {
	if (error) {
		return false;
	}
	
	if (ch < 1 || ch > 2) {
		return false;
	}
	speed = fmax(speed, 0);
	speed = fmin(speed, 100);
	
	i2c_cmd_handle_t cmd = i2c_cmd_link_create();
	i2c_master_start(cmd);
	i2c_master_write_byte(cmd, (address << 1) | I2C_MASTER_WRITE, true);
	i2c_master_write_byte(cmd, ch == 1 ? 0x85 : 0x86, true);
	i2c_master_write_byte(cmd, dir, true);
	i2c_master_write_byte(cmd, (uint8_t)(speed / 100.0 * 255.0), true);
	i2c_master_stop(cmd);
	esp_err_t ret = i2c_master_cmd_begin(I2C_NUM_1, cmd, 1000 / portTICK_RATE_MS);
	i2c_cmd_link_delete(cmd);
	
	if (ret != ESP_OK) {
		error = true;
		initialized = false;
		state = s_detect;
	}
	
	return error;
}

#endif
#ifndef __DUAL_EVO24X9_H__
#define __DUAL_EVO24X9_H__

#include <math.h>
#include <string.h>
#include "esp_log.h"

#include "driver.h"
#include "device.h"
#include "i2c-dev.h"
#include "driver/uart.h"
#include "kidbright32.h"

class DualEVO24X9 : public Device {
	private:		
		enum {
			s_detect,
			s_wait,
		} state;
		TickType_t tickcnt, polling_tickcnt;

		double temperature = 0.0, humidity = 0.0;


	public:
		// constructor
		DualEVO24X9(int bus_ch, int dev_addr) ;
		
		// override
		void init(void);
		void process(Driver *drv);
		int prop_count(void);
		bool prop_name(int index, char *name);
		bool prop_unit(int index, char *unit);
		bool prop_attr(int index, char *attr);
		bool prop_read(int index, char *value);
		bool prop_write(int index, char *value);
		
		// method
		bool motor(uint8_t ch, uint8_t dir, uint8_t speed) ;
		
};

#endif
'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () =>{
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with up()', () => {
    thermostat.up();

    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it ('decreases temperature with down()',  () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

   
  it('has a minimum of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch Power Saving Mode off', () => {
    thermostat.switchPowerSavingModeOff();

    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch Power Saving Mode back on', () => {
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();    

    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when Power Saving Mode is on', () => {
    it('has a maximum temperature of 25', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }

      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
});



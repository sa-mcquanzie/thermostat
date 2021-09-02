'use strict';

describe ('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees', () =>{
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it('increases temperature with up()', () => {
    thermostat.up();

    expect(thermostat.getCurrentTemperature()).toEqual(21);
  })
})

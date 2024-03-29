# Speedo
Speedometer (with HUD mode and limit warning) by Harris Hudson.

![Screenshot](https://harrishudson.com/github/speedo_snapshot1.png)

## Demo
Speedo: [https://harrishudson.com/speedo/](https://harrishudson.com/speedo/).
 

## Requirements
Requires a HTML5 browser with Geolocation, Device Orientation, Speech Synthesization and Speech Recognition capabilities.  At the time of publishing this app, that basically means you may have to use Google Chrome as your only option and enable the various functionality permissions as necessary - it's about the only browser capable of all these requirements.


## Instructions
 
### Instructions - Brief Summary

- Lay your device flat for HUD mode, upright for normal mode.
- The display will show current speed and nothing else.
- Single tap to announce speed.
- Double tap to set speed warning limit.
- Triple tap to change between kilometers per hour and miles per hour.
 
### Instructions - Detailed
The full Speedo instructions are very very simple.

- When the device is oriented largely upright the current speed will be displayed in large digits.
- Nothing else is displayed on the screen.
- If you are in the Southern Hemisphere the initial default speed units are kilometers per hour and is shown in blue (this can be changed).
- If you are in the Northern Hemisphere the initial default speed units are miles per hour and is shown in darkgreen (this can be changed).
- When the device is laid flat, the display will mirror and digits will be shown in black - this is HUD mode.
  "HUD mode" (Heads Up Display) is intended for placing your device flat up against your windshield.
- A single click or single tap anywhere on the screen will announce (voice) your current speed.
- A double click or double tap anywhere on the screen will enable the setting of a maximum limit warning.
  In which case, you should hear the question; "What speed limit warning value?". Then say (pronounce) a number
  that you wish to be notified if your speed exceeds that.  Eg, say; "100".  You should then hear;
  "Setting speed warning to 100".  Then whenever your speed is higher than this value (say 100),
  then you should hear a verbal warning to the effect of "Warning 103".
  Where 103 (or whatever) is your current speed.  This warning will repeat a maximum of once per every 10
  seconds whilst your speed remains higher than this threshold.  Speed warning thresholds are not retained
  between invocations of the app (that is, it will reset every time you load the app).  To reset or clear a
  speed warning threshold, simply do not answer, or say "none" when asked for a speed warning limit and the
  limit will reset with an announcement to the effect; "Speed warning turned off".
- A triple click or triple tap will allow the speed units to be changed between kilometers per hour and
  miles per hour.  You should hear; "To change units to miles/kilometers per hour, now say; change".  If you
  wish to Change to the new units, the say the word; "change" and you should then hear; "Changing units
  to miles/kilometers per hour".  If you do not reply, or say any other words, you should hear; "Leaving
  units unchanged as kilometers/miles per hour".  Once units have been changed, they will persist between
  invocations of the app (that is, if you reopen the app, the units will remain as previously set).
  In non-HUD mode, kilometers per hour are rendered blue, whereas miles per hour are rendered darkgreen.
- The app has "Add to Home Screen" capabilities and can be installed as a native app on your mobile device.
 

That's it for the instructions.
 

## Simplicity in Mind
This app is simple by design.  There is a deliberate minimalist UI.  Yes, it could better determine the speed units based on country and yes many GPS mapping apps have this speed readout automatically hooked in to road speed limits but this app is basic and simple by design.  Motivation has mainly been driven by very rigid enforcement of road speed limits by authorities in some countries in the Southern Hemisphere, namely; Australia and New Zealand (where the author mainly resides) and this app was primarily intended for highway use.
 

## Privacy
No geolocation, device orientation information, or speech utterances are sent to the server by this app.
 

## Deployment Instructions
Simply place all these files in an appropriate directory on your webserver to host a copy of this app.
 

## Author
Harris Hudson
 

## Contributing
Pull Requests are not currently being accepted.  If you would like to request a change, or find a bug, please raise an issue.  However, please keep in mind, this app is intended to be extremely simplistic by design.
 

## Donate
Donation and Sponsorship opportunities are available.  Please contact the author directly.
 

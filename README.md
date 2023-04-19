# 📻 web-rpi-fm
Web interface for Raspberry Pi fm transmitter. Made using Vue.js and Python.

<p align="center">
 <img src="/static/img/preview.png" width="70%">
</p>

[PiFmRds] on GitHub


### Installation
Warning! this was tested on Raspbian Lite 64 bit on a Raspberry Pi 3 Model B+. i have not tested it on other boards.
```sh
$ cd ~
$ git clone https://github.com/amir16yp/web-rpi-fm.git
$ cd web-rpi-fm
$ chmod +x ./install.sh
$ ./install.sh
$ python3 server.py # runs the server in production mode using waitress, on port 9000
```
The only thing left to do after installation is connecting a wire or an antenna to GPIO port 4 and access the webpage at (your pi ip):9000, and maybe make a systemd service for it.

 ### Licence
 MIT

web-rpi-fm is in the alpha phase, some functions may not work.
I am not responsible for damages caused by using the application.

 [PiFmRds]: <https://github.com/ChristopheJacquet/PiFmRds>

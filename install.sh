#sudo apt-get update
sudo apt-get install libsox-fmt-all libsox-fmt-mp3 sox git libsndfile1-dev
pip install flask Flask-Reuploaded flask_cors tinytag
git clone https://github.com/ChristopheJacquet/PiFmRds.git
cd ./PiFmRds/src
make
sudo cp ./pi_fm_rds /usr/local/bin/pifmrds
sudo chmod +x /usr/local/bin/pifmrds
cd ../../
cd static/audio/

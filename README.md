# Rpi-AM2302-with-GraphJS

## Install
clone the git repository to `/var/www/html/` \
run `sudo crontab -e` on the pi \
add `*/10 *  *   *   *     python3 /var/www/html/tempHum.py >> /var/www/html/data.csv` for a measurement every 10 minutes

![picture of the generated webpage](https://github.com/JeroenLam/Rpi-AM2302-with-GraphJS/blob/main/webpage.jpeg)

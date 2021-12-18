import Adafruit_DHT
import datetime;


# Get current time
now = datetime.datetime.now()

# Gather sensor data
humidity1, temperature1 = Adafruit_DHT.read_retry(Adafruit_DHT.DHT22, 4)
humidity1 = round(humidity1, 2)
temperature1 = round(temperature1, 2)

# If data gathering was succesfull, print data
if humidity1 is not None and temperature1 is not None:
    print(now.strftime('%Y-%m-%d %H:%M:%S,') , '{}, {}, '.format(temperature1, humidity1))


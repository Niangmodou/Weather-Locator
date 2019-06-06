import requests

class Weather:
    def __init__(self,zipcode):
        self.zipcode = zipcode
        self.apikey = apikey = "d292115d03505d7c797c1bc48626448e"
        self.retval = requests.get("http://api.openweathermap.org/data/2.5/weather?zip="+str(zipcode)+",US&appid="+apikey)
        self.retval = self.retval.json()

    def find_location(self):
        return str(self.retval["name"])
    
    def find_weather(self):
        return str(self.retval["weather"][0]["main"])

    def find_temp(self):
        temp = int(self.retval["main"]["temp"])
        temp-= 273.15
        return int(1.8*(temp) + 32)

    
def main():
    while True:
        try:
            zipcode = input("Please Enter a Zipcode: ")
            weatherObj = Weather(zipcode)
            print("Location:",weatherObj.find_location())
            print("Current Weather:",weatherObj.find_weather())
            print("Current Temperature:",weatherObj.find_temp())
        except NameError:
            print("Please Enter a Valid Zipcdoe")

main()
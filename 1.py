import pyttsx3

friday = pyttsx3.init()
voice = friday.getProperty('voices')
friday.getProperty('voice', voice[1].id)
def speak(audio):
    friday.say(audio)
    friday.runAndWait()
speak("hello Youtube")
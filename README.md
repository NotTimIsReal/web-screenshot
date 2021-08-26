screenshot is package to make your bot send screenshots of certain websites.

How To Use:
`const screenShot=require('web-screenshot')
const shot=new screenShot(true)
shot.png('https://google.com', './image.png')`
This will add a image called image.png and delete it after one second. To not delete it set `const shot=new screenShot(false)`
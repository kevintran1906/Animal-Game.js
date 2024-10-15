class element{
	constructor(damageBoost, advantages, weaknesses){
		this.damageBoost = damageBoost
		this.advantages = advantages
		this.weaknesses = weaknesses
	}
}

elements = [
	fire = new element(+50, grass, water),
	water = new elemeent(+55, fire, grass),
	grass = new element(+40, water, fire),
	
]


class Dragon {
    constructor(element, health, card) {
        this.element = element;
				this.health = health;
				this.card = card;
				this.positionX = windowWidth/2
				this.positionY = windowHeight/2
				
    }
}

class fireDragon extends Dragon {
	constructor (image, Firemove1, Firemove2, Firemove3) {
		this.FlameSwirl = Firemove1
		this.FireBall = Firemove2
		this.HellBurn = Firemove3
	}
}

fireDragons = [
	Lionydys = (image, fire, 300, FireCards),
		
]



class waterDragon extends Dragon {
	constructor (image, Watermove1, Watermove2, Watermove3) {
		this.Bubbles = Watermove1
		this.Waterfall = Watermove2
		this.Tsunami = Watermove3
	}
}

class grassDragon extends Dragon {
	constructor(image, Grassmove1, Grassmove2, Grassmove3) {
		this.LeafStrike = Grassmove1
		this.VineWhip = Grassmove2
		this.Rainbowbeam = Grassmove3
	}
}


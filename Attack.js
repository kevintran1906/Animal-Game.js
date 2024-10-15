class Attack {
	constuctor(name, hitChance, Damage) {
		this.name = name
		this.hitChance = hitChance
		this.damage = Damage
	}
}


attacks = [

	fireattack1 = new Attack("FlameSwirl", Math.round(Math.random(0, 10)), 50),
	fireattack2 = new Attack("FireBall", Math.round(Math.random(0, 10)), 55),
	fireattack3 = new Attack("HellBurn", Math.round(Math.random(0, 10)), 90),

	waterattack1 = new Attack("Bubbles", Math.round(Math.random(0, 10)), 30),
	waterattack2 = new Attack("Waterfall", Math.round(Math.random(0, 10)), 60),
	waterattack3 = new Attack("Tsunami", Math.round(Math.random(0, 10)), 70),

	grassattack1 = new Attack("Leaf Strike", Math.round(Math.random(0, 10)), 45),
	grassattack2 = new Attack("Vine Whip", Math.round(Math.random(0, 10)), 60),
	grassattack3 = new Attack("Rainbow Beam", Math.round(Math.random(0, 10)), 75),
]

class card extends Attack{
	constructor(image, element, posX, posY){
		this.element = element
		this.posX = posX
		this.posY = posY
	}
}

waterCards = [
	Bubbles = new card(water1, water),
	Waterfall = new card(water2, water),
	Tsunami = new card(water3, water),
]

fireCards = [
	FlameSwirl = new card(fire1, fire),
	FireBall = new card(fire2, fire),
	HellBurn = new card(fire3, fire),
]

grassCards = [
	FlameSwirl = new card(grass1, grass),
	FireBall = new card(grass2, grass),
	HellBurn = new card(grass3, grass),
]



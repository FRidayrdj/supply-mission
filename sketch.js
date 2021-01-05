var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var bon1,bon2,bon3;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



	function preload()
	{
		helicopterIMG=loadImage("helicopter.png")
		packageIMG=loadImage("package.png")	
	}


		function setup() 
		{
			createCanvas(800, 700);
					
			engine = Engine.create();
			world = engine.world;
			
			bon1 = new Line(310,610,20,150);
			bon3 = new Line(490,610,20,150);
			bon2 = new Line(400,680,200,20);
			
			
			packageSprite=createSprite(width/2, 80, 10,10);
			packageSprite.addImage(packageIMG)
			packageSprite.scale=0.2



			helicopterSprite=createSprite(width/2, 200, 10,10);
			helicopterSprite.addImage(helicopterIMG)
			helicopterSprite.scale=0.6

			groundSprite=createSprite(width/2, height-7, width,10);
			groundSprite.shapeColor=color(255)


			var packageBody_options =
			{
				restitution:0.70 ,isStatic:true
			}


			packageBody = Bodies.circle(width/2 , 200 , 20 , packageBody_options);
			World.add(world, packageBody);


			ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
			World.add(world, ground);



			Engine.run(engine);
		}

		function draw() 
		{	
			rectMode(CENTER);
			background(0);
			
			packageSprite.x= packageBody.position.x 
			packageSprite.y= packageBody.position.y 
			bon1.display();  
			bon2.display();
			bon3.display();
			drawSprites();
		}

	function keyPressed() 
		{
				if (keyCode === DOWN_ARROW ) 
				{
				Matter.Body.setStatic(packageBody, isStatic=false)
				packageSprite.scale = 0.20;
				}
	}






















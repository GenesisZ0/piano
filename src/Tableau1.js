

var tilesprite;

class Tableau1 extends Phaser.Scene{

    preload() {
        //bg 2 (tout au fond et très flou)
        this.load.image('bg-lune', 'assets/Lune/Lune.png');
        this.load.image('bg-Dlune', 'assets/Lune/DLune.png');
        this.load.image('g-water', 'assets/level/ground/g-water.png');
        //texture au fond
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');
        this.load.image('fish','assets/Poisson/poi.png')
        this.load.image('eau', 'assets/eau/eau.png');
        this.load.image('meau', 'assets/eau/moove.png');
        this.load.image('ciel', 'assets/Ciel/ciel.png')
        this.load.image('ciel2', 'assets/Ciel/ciel2.png')
        this.load.image("boat3", "assets/boat/boat31.png")
        this.load.image('boat', 'assets/boat/boat.png')
        this.load.image("cloud","assets/nuage/nuage.png")
        this.load.image("roche","assets/Rocher/roche.png")
        this.load.image("mon",'assets/Mongolfier/mongolfier.png')
        this.load.image("oi","assets/oiseau/oi.png")



    }



    create(){



        let bgAnimationA=this.add.sprite(0,0, 'ciel').setOrigin(0,0);
        bgAnimationA.setScale(0.5       )


        let bgAnimationB=this.add.sprite(0,0, 'ciel2').setOrigin(0,0);
        bgAnimationB.setScale(5,1)
        bgAnimationB.setAlpha(0.6)




        //--------------background 2 (tout au fond et flou)--------------------



        let water = this.add.image(0,300,'eau').setOrigin(0,0)
        water.setScale(1, 0.5)
        water.flipY =true
        water.setAlpha(0.5  )

        let moove = this.add.image(0,300,'meau').setOrigin(0,0)
        moove.setScale((-2,1.6))
        moove.setAlpha(0.1)
        //--------------background 1 (gris) --------------------

        let lune = this.add.image(200,-30,'bg-lune').setOrigin(0,0)
        lune.setScale(0.3)
        lune.setVisible(true)

        let lunre = this.add.image(200,295,'bg-lune').setOrigin(0,0)
        lunre.setScale(0.3)
        lunre.setVisible(true)
        lunre.setAlpha(0.5)
        lunre.flipY = true


        let Dlune = this.add.image(200,122,'bg-Dlune').setOrigin(0,0)
        Dlune.setScale(0.3)
        Dlune.setVisible(false)




        //-------------ground (premier plan noir)---------------------------



        let lunemesci=this.add.tileSprite(0, 650, 720, 720, 'ciel2').setPipeline('Light2D');
        lunemesci.setScale(5,1)
        lunemesci.setAlpha(0.4)


        this.lights.enable();
        this.lights.setAmbientColor(0x808080);



        var spotlight = this.lights.addLight(487, 0, 1000).setIntensity(4);

this.first_plan()

        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;

    }
    animB (){
        let image3 = this.add.image(1200, 300, 'boat3');
        let image4 = this.add.image(1200, 342, 'boat3');
        image3.setScale(0.2)
        image4.setScale(0.2)
        image4.setAlpha(0.2)
        image4.flipY = true
        let tweens = this.tweens.timeline({
            tweens: [{
                targets: [image3,image4],
                x: 500,
                ease: 'Power1',
                paused: true,
                duration: 6000,

            }]
        })
    }

   mon2() {

       let mon = this.add.image(0,270,'mon').setOrigin(0,0)
       mon.setScale(0.08)
       this.tweens.add({
           targets: mon,
           y: -200,
           x:100,
           duration: 6000,
           ease: Phaser.Math.Easing.Sine.InOut,
       });
   }


    poisson() {
        let visible = 1
        let poisson2 = this.add.image(100, 1000, 'fish').setOrigin(0, 0)
        poisson2.setScale(0.05)
            this.tweens.add({
                targets: poisson2,
                y: 30,
                duration: 3000,
                ease: Phaser.Math.Easing.Sine.InOut,
                yoyo: true,
                flipY: true,
            });
    }
    nuage (){
        let nudge = this.add.image(150,-75,'cloud').setOrigin(0,0)
        nudge.setScale(0.5)
        nudge.setAlpha(1)


        let nudge2 = this.add.image(400,50,'cloud').setOrigin(0,0)
        nudge2.setScale(0.5)

    }




    boat2 (){
        let image = this.add.image(0, 300, 'boat');
        let image2 = this.add.image(0, 392, 'boat');
        image2.setScale(0.5)
        image2.setAlpha(0.4)
        image2.flipY = 1
        image.setScale(0.5)
        this.stop = true
        let tweens = this.tweens.timeline({
            tweens: [{
                targets: [image,image2],
                x: 400,
                ease: 'Power1',
                paused: true,
                duration: 6000,

            },
                {
                    targets: [image,image2],
                    x: 800,
                    ease: 'Power1',
                    duration: 6000,

                },
                {
                    targets: [image,image2],
                    x: 1200,
                    ease: 'Power1',
                    duration: 6000,

                },
                {
                    targets: [image,image2],
                    x: 1450,
                    ease: 'Power1',
                    duration: 6000
                }]


        });
        this.first_plan()
    }

first_plan (){
    let roche = this.add.image(-70,180,'roche').setOrigin(0,0)
    roche.setScale(0.85)

}


oiseau(){
    let oi = this.add.image(1000,-50,'oi').setOrigin(0,0)
    oi.setScale(0.5)
    let tweens = this.tweens.timeline({
        tweens: [{
            targets: oi,
            x: -1000,
            ease: 'Power1',
            duration: 8000,

        }]
    })


}


    initKeyboard(){
        let me=this;
       let check = true
       let check2 = true
        let check3 = true
        let check4 = true

        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                        me.nuage()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.B:
                   if (check == true){
                       me.boat2();
                       check = false
                   }
                   break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    if (check2 == true){
                       me.animB()
                       check2 = false

                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                        me.poisson()

                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (check4 == true){
                        me.oiseau()
                        check4 = false

                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    if (check3 == true){
                        me.mon2()
                        check3 = false

                    }
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;


            }
        });
    }


    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;


    }


}

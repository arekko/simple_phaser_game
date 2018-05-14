import Phaser from 'phaser';
import logo from '../assets/logo.png';

export default class GameScene extends Phaser.Scene {
    constructor(){
        super({ keys: 'GameScene' });
    }

        preload(){
            this.load.image('logo', logo);
        }
        //Game loop
        create(){
            const logoSprite = this.add.sprite(400, 300, 'logo');
        }


    
}


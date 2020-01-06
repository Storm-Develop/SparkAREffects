/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Time = require('Time');
var Materials = require('Materials');
var Textures = require('Textures');
const Shaders = require('Shaders');

var Reactive = require('Reactive');
var Animation = require('Animation');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
var BackgroundMainImagePlane = Scene.root.find('BackgroundMain');
//var colorSelected = Reactive.RGBA(1,0.0, 0.0, 1.0);
var PlaneRegMaterial = Materials.get('RegularMaterial');
//var ColorTexturev2 = Materials.get('RegularMaterial');
var blurColor = Reactive.pack4(0,0,0,1);

const gradient = Shaders.gradient({"type" : Shaders.GradientType.HORIZONTAL});

// Create the first mix paramaters
const color1 = Reactive.pack4(0,0,0,1);
const color2 = Reactive.pack4(0,0.25,1,1);

// Create the first mix
var BunnyTexture = Textures.get('simpson');

const mix1 = Reactive.mix(color1,color2,gradient);


const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;

//BackgroundMainImagePlane.material = Materials.get('RegularMaterial0');
PlaneRegMaterial.setTexture(BunnyTexture.signal, {textureSlotName: textureSlot});
//var texSig = Textures.get('simpson').signal;//optional for your use
//var packedCol = Reactive.pack4(1, 0.5, 0.7, 1);
//var newCol = Reactive.mul(texSig, packedCol);//optional for your use
//const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;

//Materials.get('RegularMaterial').setTexture(newCol, {textureSlotName: BartTexture});
//Materials.get('RegularMaterial').setTexture(BunnyTexture);
//Diagnostics.log(BunnyTexture);
//ColorTexturev2.diffuse.
//ColorTexture.color = colorSelected;
// 
// Repeating timer:
//

Time.ms.interval(1000).subscribe(
    function(elapsedTime) {
        PlaneRegMaterial.setTexture(BunnyTexture.signal, {textureSlotName: textureSlot});

        // NOTE: Time.ms may differ slightly from the elapsed
        // time passed to the callback. Time.ms shows the exact
        // time since the effect started, whereas the callback
        // exposes an exact multiple of the specified interval.
       // Diagnostics.log(Time.ms.lastValue);

        // Networking.fetch(url).then(function(result) {
        //     // Diagnostics.log(result);
        //     // Log result: {"status":200}
        //     if ((result.status >= 200) && (result.status < 300)) {
        //         return result.json();
        //     }
        //     throw new Error("HTTP status code " + result.status);
        // }).then(function(json) {
        //     var xpos = parseInt(json.x);
        //     // Diagnostics.log("x: " + xpos + " elapsed time: " + elapsedTime);
        //     BackgroundMainImagePlane.transform.x = xpos;
        // }).catch(function(error) {
        //     Diagnostics.log("There was an issue with fetch operation: " + error.message);
        // });
    });

//console.log(Math.random())

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');

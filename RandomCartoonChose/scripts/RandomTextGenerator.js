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
var PlaneRegMaterial = Materials.get('RegularMaterial');


// Different Textures


var ImageTobeUsed = "";
var ListTextures = [];

var i;
for (i = 1; i < 51; i++) {
    ImageTobeUsed = "v" + i;
    ListTextures.push(Textures.get(ImageTobeUsed));
}

//var ListTextures = [BunnyTexture,SimpsonTexture,BartTexture];
const DiffuseTextureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;

//BackgroundMainImagePlane.material = Materials.get('RegularMaterial0');
//PlaneRegMaterial.setTexture(BunnyTexture.signal, {textureSlotName: DiffuseTextureSlot});


Time.ms.interval(100).subscribe(
    function(elapsedTime) {
        var randomCartoonNum = getRandomInt(ListTextures.length);
        PlaneRegMaterial.setTexture(ListTextures[randomCartoonNum].signal, {textureSlotName: DiffuseTextureSlot});

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


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
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

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
const CameraInfo = require('CameraInfo');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
var ImageTobeUsed = "";

var BackgroundMainImagePlane = Scene.root.find('BackgroundMain');
var PlaneRegMaterial = Materials.get('RegularMaterial');
const isRecordingVideo = CameraInfo.isRecordingVideo;

isRecordingVideo.onOff().subscribe(  
    function Reset() {
        ImageSelected =false;
      });

// Different Textures

var ListTextures = [];

var i;
for (i = 1; i < 51; i++) {
    ImageTobeUsed = "v" + i;
    ListTextures.push(Textures.get(ImageTobeUsed));
}

const DiffuseTextureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;
var RandomCartoonNum;
var ImageSelected =false;

Time.ms.interval(200).subscribe(
    function(elapsedTime) {
        if(!ImageSelected)
        {
            RandomCartoonNum = getRandomInt(ListTextures.length);
            PlaneRegMaterial.setTexture(ListTextures[RandomCartoonNum].signal, {textureSlotName: DiffuseTextureSlot});
        }
        // NOTE: Time.ms may differ slightly from the elapsed
        // time passed to the callback. Time.ms shows the exact
        // time since the effect started, whereas the callback
        // exposes an exact multiple of the specified interval.
       // Diagnostics.log(Time.ms.lastValue);
    });


Time.ms.interval(5000).subscribe(
        function(elapsedTime) {
            if (!ImageSelected)
            {
                ImageSelected =true;
                PlaneRegMaterial.setTexture(ListTextures[RandomCartoonNum].signal, {textureSlotName: DiffuseTextureSlot});
            }
        });
    

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }


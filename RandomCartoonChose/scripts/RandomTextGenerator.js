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
const Audio = require('Audio');

export const Diagnostics = require('Diagnostics');
 var GetStarted;
var ImageTobeUsed = "";
var RandomCartoonNum;
var RandomCartoonNumSecond;

//var BackgroundMainImagePlane = Scene.root.find('BackgroundMain');
var PlaneRegMaterialFirst = Materials.get('RegularMaterial');
var PlaneRegMaterialSecond = Materials.get('RegularMaterialSecond');
var ListTexturesFirst = [];
var ListTexturesSecond = [];

// Different Textures
//Assigning Simple background Image
const DiffuseTextureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;
var i;
for (i = 1; i < 31; i++) {
    ImageTobeUsed = "fanfriends" + i;
    ListTexturesFirst.push(Textures.get(ImageTobeUsed));
    ListTexturesSecond.push(Textures.get(ImageTobeUsed));
}
const isRecordingVideo = CameraInfo.isRecordingVideo;
PlaneRegMaterialFirst.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});
PlaneRegMaterialSecond.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});

isRecordingVideo.monitor().subscribe(function(videoOn) {
    Diagnostics.log(videoOn);
   // plane.material.diffuse = configuration.items[index.newValue].image_texture;
   PlaneRegMaterialFirst.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});
   PlaneRegMaterialSecond.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});
if (videoOn)
{
    //RESET
 Audio.getPlaybackController("foundeffect").reset();
 PlaneRegMaterialFirst.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});
 PlaneRegMaterialSecond.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});

var ImageSelected =true;
var GameStarted = false;

Time.ms.interval(2000).subscribe(
    function(elapsedTime) {
        if (!GameStarted)
        {
          GameStarted=true;
          ImageSelected = false;
        }
    });


Time.ms.interval(150).subscribe(
    function(elapsedTime) {
        if(!ImageSelected)
        {
            RandomCartoonNum = getRandomInt(ListTexturesFirst.length);
            RandomCartoonNumSecond = getRandomInt(ListTexturesFirst.length);
            PlaneRegMaterialFirst.setTexture(ListTexturesFirst[RandomCartoonNum].signal, {textureSlotName: DiffuseTextureSlot});
            PlaneRegMaterialSecond.setTexture(ListTexturesFirst[RandomCartoonNumSecond].signal, {textureSlotName: DiffuseTextureSlot});

        }
    });


Time.ms.interval(6000).subscribe(
        function(elapsedTime) {
            if (!ImageSelected)
            {
                ImageSelected =true;
                Audio.getPlaybackController("foundeffect").play();
                PlaneRegMaterialFirst.setTexture(ListTexturesFirst[RandomCartoonNum].signal, {textureSlotName: DiffuseTextureSlot});
                PlaneRegMaterialSecond.setTexture(ListTexturesFirst[RandomCartoonNumSecond].signal, {textureSlotName: DiffuseTextureSlot});
            }
        });

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    }
    });  

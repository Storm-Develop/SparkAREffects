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
const Networking = require('Networking');
export const Diagnostics = require('Diagnostics');
 var GetStarted;
var ImageTobeUsed = "";
var RandomCartoonNum;
//var BackgroundMainImagePlane = Scene.root.find('BackgroundMain');
var PlaneRegMaterial = Materials.get('RegularMaterial');

///Networking Gif Module
const url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=EY5Y0fToEvJeRqe1LvJ37zMkt9Bz8lfC&limit=5";
// Create a request object
const request = {

    // The HTTP Method of the request
    // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
    method: 'GET',
  
    // The HTTP Headers of the request
    // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  
    // The data to send, in string format
    body: JSON.stringify({title: 'Networking Module'})
  
  };
  Networking.fetch("https://gabby-airbus.glitch.me/random");

// Send the request to the url
// Networking.fetch(url,request).then(function(result) {

//     // Check the status of the result
//     // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
//     if ((result.status >= 200) && (result.status < 300)) {
  
//       // If the request was successful, chain the JSON forward
//       return result.json();
  
//     }
  
//     // If the request was not successful, throw an error
//     throw new Error('HTTP status code - ' + result.status);
  
//   }).then(function(json) {
  
//     // Log the JSON obtained by the successful request
//     Diagnostics.log('Successfully sent - ' + json.title);
  
//   }).catch(function(error) {
  
//     // Log any errors that may have happened with the request
//     Diagnostics.log('Error - ' + error.message);
  
//   });
  


var ListTextures = [];
// Different Textures
//Assigning Simple background Image
const DiffuseTextureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;
var i;
for (i = 1; i < 49; i++) {
    ImageTobeUsed = "v" + i;
    ListTextures.push(Textures.get(ImageTobeUsed));
}
const isRecordingVideo = CameraInfo.isRecordingVideo;
PlaneRegMaterial.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});

isRecordingVideo.monitor().subscribe(function(videoOn) {
    Diagnostics.log(videoOn);
   // plane.material.diffuse = configuration.items[index.newValue].image_texture;
   PlaneRegMaterial.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});
if (videoOn)
{
    //RESET
    Audio.getPlaybackController("foundeffect").reset();
 PlaneRegMaterial.setTexture(Textures.get("vfirst").signal, {textureSlotName: DiffuseTextureSlot});
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


Time.ms.interval(100).subscribe(
    function(elapsedTime) {
        if(!ImageSelected)
        {
            RandomCartoonNum = getRandomInt(ListTextures.length);
            PlaneRegMaterial.setTexture(ListTextures[RandomCartoonNum].signal, {textureSlotName: DiffuseTextureSlot});
        }
    });


Time.ms.interval(6000).subscribe(
        function(elapsedTime) {
            if (!ImageSelected)
            {
                ImageSelected =true;
                Audio.getPlaybackController("foundeffect").play();
                PlaneRegMaterial.setTexture(ListTextures[RandomCartoonNum].signal, {textureSlotName: DiffuseTextureSlot});
            }
        });

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    }
    });  

/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var StageView = require('views/StageView');
    var Director = require('tools/Director');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    mainContext.setPerspective(1000);

    var stageView = new StageView();
    var director = new Director();

    var actorDescriptions = {
        'Demo Actor': {
            type: 'image',
            content: 'content/images/scrollster-name-main.001.jpg',
            properties: {
                backfaceVisibility: 'visible'
            },
            size: ['100%', '100%'],
            position: [150, 150],
            classes: ['z2'],
            zPosition: 1,
            opacity: 0.08
        },
        'Demo Two': {
            type: 'html',
            content: 'Hi!',
            size: [100, 100],
            position: [800, 200],
            classes: ['z1'],
            zPosition: 100,
            opacity: 0,
            properties: {
                fontSize: '2em',
                padding: '.5em',
                backfaceVisibility: 'visible',
                backgroundColor: 'blue'
            }
        }
    };

    var actionDescriptions = [
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 1100,
            type: 'skew',
            properties: {
                scaleZ: 0.5
            }
        },
        {
            actor: 'Demo Actor',
            start: 0,
            stop: 1000,
            type: 'rotateTo',
            properties: {
                axis: 'y',
                angleInDegrees: 720,
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Demo Actor',
            start: 0,
            stop: 600,
            type: 'position',
            properties: {
                scaleX: 0,
                scaleY: -1
            }
        },
        {
            actor: 'Demo Actor',
            start: 600,
            stop: 1000,
            type: 'moveTo',
            properties: {
                location: ['50%', '50%'],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Demo Actor',
            start: 0,
            stop: 1000,
            type: 'opacity',
            properties: {
                finalOpacity: 1
            }
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 2000,
            type: 'scale',
            properties: {
                changeRatioX: 4,
                changeRatioY: 4,
                curve: 'easeOut'
            }
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 2000,
            type: 'rotateTo',
            properties: {
                axis: 'y',
                angleInDegrees: 540
            }
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 1600,
            type: 'position',
            properties: {
                scaleX: 0,
                scaleY: -1
            }
        },
        {
            actor: 'Demo Two',
            start: 1600,
            stop: 2000,
            type: 'moveTo',
            properties: {
                location: [720, 450]
            }
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 1200,
            type: 'opacity',
            properties: {
                curve: 'linear'
            }
        },
        {
            actor: 'Demo Two',
            start: 1200,
            stop: 2000,
            type: 'opacity',
            properties: {
                curve: 'linear',
                finalOpacity: 0
            }
        }
    ];

    director.populateStage(stageView, actorDescriptions, actionDescriptions);

    mainContext.add(stageView);
});

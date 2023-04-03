var PartsPlayer=function(){this.crossfade_audio=null;};PartsPlayer.prototype.load_parts_player_audio=function(){this.crossfade_audio=new CrossfadeAudio();this.crossfade_audio.initialize();};PartsPlayer.prototype.play_button=function(){this.crossfade_audio.play();};

var tons_of_nodes = [];
var CrossfadeAudio = function() {
    this.base_gain = 1.0;
    this.gain1 = this.base_gain;
    this.gain2 = this.base_gain;
    this.gain3 = this.base_gain;
    this.gain4 = this.base_gain;
    this.gain5 = this.base_gain;
    this.gain6 = this.base_gain;
    this.gain7 = this.base_gain;
    this.gain8 = this.base_gain;
    this.audio_context = null;
    this.bufferLoader = null;
    this.audio_context = new(window.AudioContext || window.webkitAudioContext)();
    this.loadSounds(this, {
        C: "https://s3.amazonaws.com/unode1/assets/11794/i0XOnzxS0GcGKmGs40P7_C.mp3",
        D: "https://s3.amazonaws.com/unode1/assets/11794/Pw0Lc1cPSia0caOEN6Zb_D.mp3",
        E: "https://s3.amazonaws.com/unode1/assets/11794/XUCIVW41QLL4iHbfxJsQ_E.mp3",
        F: "https://s3.amazonaws.com/unode1/assets/11794/dWLzNJSNRHebJFPVcEyw_F.mp3",
        G: "https://s3.amazonaws.com/unode1/assets/11794/m2WEDRnaREmfU08sU8Jz_G.mp3	",
        A: "https://s3.amazonaws.com/unode1/assets/11794/omooYwTBugL1z90K3rQu_A.mp3",
        B: "https://s3.amazonaws.com/unode1/assets/11794/rhbbZcMTkKDzajK6ut7w_B.mp3",
        HC: "https://s3.amazonaws.com/unode1/assets/11794/3ZbKhL8DQ6SE7Y87bFgg_Hi-C.mp3"
    }, this.loaded_callback);
    this.isPlaying = false;
};
CrossfadeAudio.prototype.loadSounds = function(obj, soundMap, callback) {
    console.log("sound files being loaded");
    var names = [];
    var paths = [];
    for (var name in soundMap) {
        var path = soundMap[name];
        names.push(name);
        paths.push(path);
    }
    this.bufferLoader = new BufferLoader(this.audio_context, paths, function(bufferList) {
        for (var i = 0; i < bufferList.length; i++) {
            var buffer = bufferList[i];
            var name = names[i];
            obj[name] = buffer;
        }
        if (callback) {
            callback();
        }
    });
    this.bufferLoader.load();
};
CrossfadeAudio.prototype.initialize = function() {
    if (!this.audio_context.createGain)
        this.audio_context.createGain = this.audio_context.createGainNode;
    if (!this.audio_context.createDelay)
        this.audio_context.createDelay = this.audio_context.createDelayNode;
    if (!this.audio_context.createScriptProcessor)
        this.audio_context.createScriptProcessor = this.audio_context.createJavaScriptNode;
};
CrossfadeAudio.prototype.loaded_callback = function() {
    console.log("audio is now loaded");
};
CrossfadeAudio.prototype.play = function() {
    if (Cplay) {
        this.C_src = createSource(this, this.C, "c_source", this);
    }
    if (Dplay) {
        this.D_src = createSource(this, this.D, "d_source", this);
    }
    if (Eplay) {
        this.E_src = createSource(this, this.E, "e_source", this);
    }
    if (Fplay) {
        this.F_src = createSource(this, this.F, "f_source", this);
    }
    if (Gplay) {
        this.G_src = createSource(this, this.G, "g_source", this);
    }
    if (Aplay) {
        this.A_src = createSource(this, this.A, "a_source", this);
        console.log(this.A_src)
        console.log(this.A)
    }
    if (Bplay) {
        this.B_src = createSource(this, this.B, "b_source", this);
    }
    if (HCplay) {
        this.HC_src = createSource(this, this.HC, "hc_source", this);
    }
    if (Cplay) {
        tons_of_nodes[live_nodes] = this.C_src;
        live_nodes++;
    }
    if (Dplay) {
        tons_of_nodes[live_nodes] = this.D_src;
        live_nodes++;
    }
    if (Eplay) {
        tons_of_nodes[live_nodes] = this.E_src;
        live_nodes++;
    }
    if (Fplay) {
        tons_of_nodes[live_nodes] = this.F_src;
        live_nodes++;
    }
    if (Gplay) {
        tons_of_nodes[live_nodes] = this.G_src;
        live_nodes++;
    }
    if (Aplay) {
        tons_of_nodes[live_nodes] = this.A_src;
        live_nodes++;
    }
    if (Bplay) {
        tons_of_nodes[live_nodes] = this.B_src;
        live_nodes++;
    }
    if (HCplay) {
        tons_of_nodes[live_nodes] = this.HC_src;
        live_nodes++;
    }
    var onName = "start";
    if (Cplay) {
        this.C_src.source[onName](0);
    }
    if (Dplay) {
        this.D_src.source[onName](0);
    }
    if (Eplay) {
        this.E_src.source[onName](0);
    }
    if (Fplay) {
        this.F_src.source[onName](0);
    }
    if (Gplay) {
        this.G_src.source[onName](0);
    }
    if (Aplay) {
        this.A_src.source[onName](0);
    }
    if (Bplay) {
        this.B_src.source[onName](0);
    }
    if (HCplay) {
        this.HC_src.source[onName](0);
    }
    if (Cplay) {
        this.C_src.gainNode.gain.value = this.gain1;
    }
    if (Dplay) {
        this.D_src.gainNode.gain.value = this.gain1;
    }
    if (Eplay) {
        this.E_src.gainNode.gain.value = this.gain1;
    }
    if (Fplay) {
        this.F_src.gainNode.gain.value = this.gain1;
    }
    if (Gplay) {
        this.G_src.gainNode.gain.value = this.gain1;
    }
    if (Aplay) {
        this.A_src.gainNode.gain.value = this.gain1;
    }
    if (Bplay) {
        this.B_src.gainNode.gain.value = this.gain1;
    }
    if (HCplay) {
        this.HC_src.gainNode.gain.value = this.gain1;
    }

    function createSource(obj, buffer, group_name_in, cfa) {
        var source = obj.audio_context.createBufferSource();
        var gainNode = obj.audio_context.createGain();
        source.buffer = buffer;
        source.loop = false;
        source.connect(gainNode);
        var group_name = group_name_in;
        gainNode.connect(obj.audio_context.destination);
        source.onended = function(e) {
            gainNode.disconnect();
            gainNode = null;
            source.disconnect();
            source = null;
            if (group_name === "c_source") {
                obj.C_src = null;
            } else if (group_name === "d_source") {
                obj.D_src = null;
            } else if (group_name === "e_source") {
                obj.E_src = null;
            } else if (group_name === "f_source") {
                obj.F_src = null;
            } else if (group_name === "g_source") {
                obj.G_src = null;
            } else if (group_name === "a_source") {
                obj.A_src = null;
            } else if (group_name === "b_source") {
                obj.B_src = null;
            } else if (group_name === "hic_source") {
                obj.HC_src = null;
            }
        }.bind(this);
        return {
            source: source,
            gainNode: gainNode
        };
    }
};
CrossfadeAudio.prototype.stop = function() {
    console.log("stopping");
    var offName = 'stop';
    this.C_src.source[offName](0);
    this.D_src.source[offName](0);
    this.E_src.source[offName](0);
    this.F_src.source[offName](0);
    this.G_src.source[offName](0);
    this.A_src.source[offName](0);
    this.B_src.source[offName](0);
    this.HC_src.source[offName](0);
};

function stop_all_kaboom() {
    console.log("stopping all");
    var offName = 'stop';
    var node;
    console.log("there are " + live_nodes + " nodes live right now");
    for (var i = 0, max = tons_of_nodes.length; i < max; i++) {
        node = tons_of_nodes[i];
        console.log('node is ' + node);
        if (i < tons_of_nodes.length - 8) {
            node.source[offName](0);
        }
        node.source = null;
        node.gainNode = null;
        node = null;
    }
    tons_of_nodes = [];
    live_nodes = 0;
}

function stop_every() {
    console.log("stopping all");
    var offName = 'stop';
    var node;
    console.log("there are " + live_nodes + " nodes live right now");
    console.log("There are " + tons_of_nodes.length + " nodes in the array");
    for (var i = 0, max = tons_of_nodes.length; i < max; i++) {
        node = tons_of_nodes[i];
        console.log('node is ' + node);
        if (node != null) {
            node.source[offName](0);
        }
        node.source = null;
        node.gainNode = null;
        node = null;
    }
    tons_of_nodes = [];
    console.log("setting nodes to zero " + live_nodes);
    live_nodes = 0;
    console.log("set nodes to zero " + live_nodes);
}

window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};})();function BufferLoader(context,urlList,callback){this.debug_buffer_loader=true;this.context=context;this.urlList=urlList;this.onload=callback;this.bufferList=new Array();this.loadCount=0;}
BufferLoader.prototype.load=function(){for(var i=0;i<this.urlList.length;++i){this.loadBuffer(this.urlList[i],i);}};BufferLoader.prototype.loadBuffer=function(url,index){var request=new XMLHttpRequest();request.open("GET",url,true);request.responseType="arraybuffer";var loader=this;request.onload=function(){loader.context.decodeAudioData(request.response,function(buffer){if(!buffer){console.log('ERROR error decoding file data: '+url);return;}
loader.bufferList[index]=buffer;if(++loader.loadCount==loader.urlList.length){loader.onload(loader.bufferList);}},function(error){});};request.onerror=function(){console.log('ERROR BufferLoader: XHR error');};request.send();};
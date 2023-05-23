(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"scripts":{"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPixels":TDV.Tour.Script.getPixels,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizStart":TDV.Tour.Script.quizStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"createTween":TDV.Tour.Script.createTween,"startMeasurement":TDV.Tour.Script.startMeasurement,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"init":TDV.Tour.Script.init,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"translate":TDV.Tour.Script.translate,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumePlayers":TDV.Tour.Script.resumePlayers,"setLocale":TDV.Tour.Script.setLocale,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"clone":TDV.Tour.Script.clone,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"cloneBindings":TDV.Tour.Script.cloneBindings,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getKey":TDV.Tour.Script.getKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMapLocation":TDV.Tour.Script.setMapLocation,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setValue":TDV.Tour.Script.setValue,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeJS":TDV.Tour.Script.executeJS,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"mixObject":TDV.Tour.Script.mixObject,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"unregisterKey":TDV.Tour.Script.unregisterKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"registerKey":TDV.Tour.Script.registerKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"_initSplitViewer":TDV.Tour.Script._initSplitViewer},"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_5D4F843F_4898_709A_41CF_6B050BA3122B], 'cardboardAvailable')","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"defaultLocale":"en","name":"Player7124","history":{}},"children":["this.MainViewer","this.IconButton_5D4F843F_4898_709A_41CF_6B050BA3122B"],"propagateClick":false,"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","scrollBarColor":"#000000","scrollBarMargin":2,"layout":"absolute","gap":10,"hash": "37bc9af0b9459e45bb594057a3e29081306d766d41d60a2a620ac92966942adb", "definitions": [{"id":"panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5BB0DB51_4898_F0E6_41D0_21574AE9D326","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5BB0FB51_4898_F0E6_41BB_589E5D8088A2","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"end":"this.trigger('tourEnded')","camera":"this.panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"id":"MainViewer","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"progressRight":"33%","toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","vrPointerColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingRight":6,"playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"data":{"name":"Main Viewer"},"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesFontSize":"3vmin","minHeight":50,"progressBottom":10,"playbackBarBottom":5,"height":"100%","toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","minWidth":100,"toolTipFontFamily":"Arial","progressBorderSize":0,"progressBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadow":true,"propagateClick":false,"progressLeft":"33%","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarRight":0,"class":"ViewerArea","playbackBarBorderColor":"#FFFFFF","playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","playbackBarLeft":0,"playbackBarBorderRadius":0,"subtitlesGap":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipBackgroundColor":"#F6F6F6","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_5D4F843F_4898_709A_41CF_6B050BA3122B","arrowKeysAction":"translate","class":"PanoramaPlayer","aaEnabled":true},{"id":"IconButton_5D4F843F_4898_709A_41CF_6B050BA3122B","right":"3.53%","propagateClick":false,"data":{"name":"IconButton12329"},"class":"IconButton","verticalAlign":"middle","backgroundOpacity":0,"bottom":"2.04%","maxHeight":70,"maxWidth":70,"height":70,"width":70,"minHeight":1,"minWidth":1,"horizontalAlign":"center","iconURL":"skin/IconButton_5D4F843F_4898_709A_41CF_6B050BA3122B.png"},{"id":"panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253","label":trans('panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253.label'),"hfovMax":130,"thumbnailUrl":"media/panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253_t.jpg","data":{"label":"Untitled-2"},"frames":[{"thumbnailUrl":"media/panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253_t.jpg","cube":{"class":"ImageResource","levels":[{"height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame"}],"vfov":180,"hfovMin":"150%","overlays":["this.overlay_5CF04ACD_4898_11FE_41C0_7EAA6075EF9F"],"hfov":360,"adjacentPanoramas":[{"panorama":"this.panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA","yaw":-149.3,"data":{"overlayID":"overlay_5CF04ACD_4898_11FE_41C0_7EAA6075EF9F"},"distance":24.17,"select":"this.overlay_5CF04ACD_4898_11FE_41C0_7EAA6075EF9F.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":-117.31}],"class":"Panorama"},{"id":"panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA","label":trans('panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA.label'),"hfovMax":130,"thumbnailUrl":"media/panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_t.jpg","data":{"label":"Panorama1_000 (1)"},"frames":[{"thumbnailUrl":"media/panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_t.jpg","cube":{"class":"ImageResource","levels":[{"height":3072,"colCount":36,"tags":"ondemand","rowCount":6,"url":"media/panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":18432},{"height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072},{"height":2048,"colCount":6,"tags":"mobilevr2gen","rowCount":1,"url":"media/panorama_5BB3BBC1_4898_17E6_41A7_7085DF33FCFA_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","width":12288}]},"class":"CubicPanoramaFrame"}],"vfov":180,"hfovMin":"120%","overlays":["this.overlay_5CDCEDB8_4898_13A6_41D1_AF8FAE6965D9"],"hfov":360,"adjacentPanoramas":[{"panorama":"this.panorama_5B65A3AB_4898_17BA_41BD_3DB33519E253","yaw":-117.31,"data":{"overlayID":"overlay_5CDCEDB8_4898_13A6_41D1_AF8FAE6965D9"},"distance":71.98,"select":"this.overlay_5CDCEDB8_4898_13A6_41D1_AF8FAE6965D9.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":-149.3}],"class":"Panorama"},{"id":"sequence_5BB0DB51_4898_F0E6_41D0_21574AE9D326","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_5BB0FB51_4898_F0E6_41BB_589E5D8088A2","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"overlay_5CF04ACD_4898_11FE_41C0_7EAA6075EF9F","areas":["this.HotspotPanoramaOverlayArea_5CF8BAD1_4898_11E9_41C3_647B3C07A89E"],"useHandCursor":true,"maps":[],"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"Arrow 03c"},"vfov":3.97,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-149.3,"image":"this.AnimatedImageResource_5C305B5A_4888_30E5_41A6_775EDFBEC239","hfov":10.5,"pitch":-4.01}],"enabledInCardboard":true,"data":{"label":"Arrow 03c","hasPanoramaAction":true}},{"id":"overlay_5CDCEDB8_4898_13A6_41D1_AF8FAE6965D9","areas":["this.HotspotPanoramaOverlayArea_5CDA0DBC_4898_139E_41A2_10EFEBC28B0E"],"useHandCursor":true,"maps":[],"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"Arrow 03c"},"vfov":3.97,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-117.31,"image":"this.AnimatedImageResource_5C306B5A_4888_30E5_4110_96692AD115B0","hfov":10.5,"pitch":-1.34}],"enabledInCardboard":true,"data":{"label":"Arrow 03c","hasPanoramaAction":true}},{"id":"HotspotPanoramaOverlayArea_5CF8BAD1_4898_11E9_41C3_647B3C07A89E","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"AnimatedImageResource_5C305B5A_4888_30E5_41A6_775EDFBEC239","frameCount":30,"levels":[{"height":420,"url":"media/res_5CB0FCD1_4898_71E7_41CB_2D0FDF041659_0.png","class":"ImageResourceLevel","width":925}],"frameDuration":41,"class":"AnimatedImageResource","colCount":5,"rowCount":6,"finalFrame":"first"},{"id":"HotspotPanoramaOverlayArea_5CDA0DBC_4898_139E_41A2_10EFEBC28B0E","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_5C306B5A_4888_30E5_4110_96692AD115B0","frameCount":30,"levels":[{"height":420,"url":"media/res_5CB0FCD1_4898_71E7_41CB_2D0FDF041659_0.png","class":"ImageResourceLevel","width":925}],"frameDuration":41,"class":"AnimatedImageResource","colCount":5,"rowCount":6,"finalFrame":"first"}],"width":"100%","height":"100%","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.11.js.map
})();
//Generated with v2023.0.11, Tue May 23 2023
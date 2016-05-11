package {
    import flash.display.Sprite;
    import flash.display.StageAlign;
    import flash.display.StageScaleMode;
    import flash.events.Event;
    import flash.external.ExternalInterface;

    public class BrowserZoomLevel extends Sprite {
        public function BrowserZoomLevel() {
            this.addEventListener(Event.ADDED_TO_STAGE, onAddToStage);	
        }

        private function onAddToStage(e:Event):void{
            stage.scaleMode = StageScaleMode.NO_SCALE;
            stage.align = StageAlign.TOP_LEFT;
            stage.addEventListener(Event.RESIZE, onResize);

            // 起動時初期化
            passSize();
        }

        private function onResize(e:Event = null):void{
            passSize();
        }

        private function passSize():void{
            ExternalInterface.call('onResizeSWF', stage.stageWidth);
        }
    }
}



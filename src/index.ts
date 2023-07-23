import './style.scss';
import { test1 } from './index2'

export function testPress(id: string) {
    console.log("Pressed declared");

    $('.jsPress').on('click', function() {
        console.log("Pressed",id );
    })
}

testPress("sample");
test1();
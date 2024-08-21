import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'random',
    standalone: true,
})

export class RandomPipe implements PipeTransform {

    transform(value: string): string {
        console.log("in transform method");
        let returnValue = '';
        returnValue = 'hjhikj';
        console.log('return value' + returnValue);
        return returnValue
    }
}
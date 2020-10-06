import { TestScheduler } from 'jest';
import { getCapitalize } from './utils';
import { getIdFromUrl } from './utils';
import { getAnimatedShinyImageFromId } from './utils';


describe('getAnimatedShinyImageFromId', () => {
    test('should return the same image as requested', () => {
        let input = "1";
        let output = getAnimatedShinyImageFromId(input);
        expect(output).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif");
    });
});




describe('getIdFromUrl', () => {
    test('should return id from url-index', () => {
        let input = "https://pokeapi.co/api/v2/pokemon/3";
        let output = getIdFromUrl(input);
        expect(output).toBe("3");
    });

    test('should return id from url-index', () => {
        let input = "https://pokeapi.co/api/v2/pokemon/3";
        let output = getIdFromUrl(input);
        expect(output).toBe("2");
    });
});




describe('getCapitalize', () => {
    test('should capitalize single word', () => {
        let input = "hello";
        var output = getCapitalize(input);
        expect(output).toBe("Hello");
        expect(output).toHaveLength(5);
        expect(output).toBeDefined();

    });

    test('should capitalize single word', () => {
        let input = "hello world";
        var output = getCapitalize(input);
        expect(output).toBe("Hello world");

    });
});





import { createBlock } from '.';

describe('createBlock', () => {
    const blockName = 'someblock';
    const elementName = 'someelement';
    const modifierName = 'some-modifier';
    const anotherModifierName = 'another-modifier';

    it('should create instance with block', () => {
        const helper = createBlock(blockName);

        expect(helper.blockName).toEqual(blockName);
    });

    it('should return block name as a result of block() method', () => {
        const helper = createBlock(blockName);

        expect(helper.block()).toEqual(blockName);
    });

    it('should return element name as a result of element() method', () => {
        const helper = createBlock(blockName);
        const elementSeparator = helper._elementSeparator;

        expect(helper.element(elementName)).toEqual(`${blockName}${elementSeparator}${elementName}`);
    });

    it('should return modified block name as a result of modifyBlock(string) method', () => {
        const helper = createBlock(blockName);
        const modifierSeparator = helper._modifierSeparator;

        expect(helper.modifyBlock(modifierName)).toEqual(`${blockName}${modifierSeparator}${modifierName}`);
    });

    it('should return modified block name as a result of modifyBlock(Array<string>) method', () => {
        const helper = createBlock(blockName);
        const modifierSeparator = helper._modifierSeparator;

        expect(helper.modifyBlock([modifierName, anotherModifierName])).toEqual(`${blockName}${modifierSeparator}${modifierName} ${blockName}${modifierSeparator}${anotherModifierName}`);
    });


    it('should return modified block name as a result of modifyBlock({[string]: boolean}) method', () => {
        const helper = createBlock(blockName);
        const modifierSeparator = helper._modifierSeparator;

        expect(helper.modifyBlock({
            [modifierName]: true,
            [anotherModifierName]: false,
        })).toEqual(`${blockName}${modifierSeparator}${modifierName}`);
    });
});

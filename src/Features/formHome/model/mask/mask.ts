import { MaskitoOptions } from '@maskito/core'
import { maskitoPrefixPostprocessorGenerator, maskitoWithPlaceholder } from '@maskito/kit'

export const PLACEHOLDER = '+  (   ) ___-__-__'

export const { removePlaceholder, plugins, ...placeholderOptions } = maskitoWithPlaceholder(PLACEHOLDER)

export const options: MaskitoOptions = {
   preprocessors: placeholderOptions.preprocessors,
   postprocessors: [maskitoPrefixPostprocessorGenerator('+7'), ...placeholderOptions.postprocessors],
   plugins,
   mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
}

// https://github.com/voronianski/oceanic-next-color-scheme

interface PrismThemeEntry {
  color?: string;
  backgroundColor?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  opacity?: number;
  [styleKey: string]: string | number | void;
}

type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'typescript'
  | 'wasm'
  | 'yaml';

interface PrismTheme {
  plain: PrismThemeEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeEntry;
    languages?: Language[];
  }>;
}

const colors = {
  char: '#D8DEE9',
  comment: '#999999',
  keyword: '#008dff',
  primitive: '#5a9bcf',
  string: '#0b8235',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#999999',
  tag: '#f81d22',
  function: '#f81d22',
  className: '#f81d22',
  method: '#6699CC',
  operator: 'rgb(11, 130, 53)'
};

const theme: PrismTheme = {
  plain: {
    backgroundColor: 'transparent',
    color: 'rgba(0, 0, 0, 0.85)'
  },
  styles: [
    {
      types: ['attr-name'],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ['attr-value'],
      style: {
        color: colors.string
      }
    },
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colors.comment
      }
    },
    {
      types: [
        'property',
        'number',
        'function-name',
        'constant',
        'symbol',
        'deleted'
      ],
      style: {
        color: colors.primitive
      }
    },
    {
      types: ['boolean'],
      style: {
        color: colors.boolean
      }
    },
    {
      types: ['tag'],
      style: {
        color: colors.tag
      }
    },
    {
      types: ['string'],
      style: {
        color: colors.string
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: colors.punctuation
      }
    },
    {
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        color: colors.char
      }
    },
    {
      types: ['function'],
      style: {
        color: colors.function
      }
    },
    {
      types: ['operator', 'entity', 'url', 'variable'],
      style: {
        color: colors.operator
      }
    },
    {
      types: ['keyword'],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ['at-rule', 'class-name'],
      style: {
        color: colors.className
      }
    },
    {
      types: ['important'],
      style: {
        fontWeight: '400'
      }
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    }
  ]
};

export default theme;

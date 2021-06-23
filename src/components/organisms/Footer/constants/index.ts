export type FooterType = {
  url: string;
  text: string;
};

export type FooterListType = {
  title: string;
  footerList: FooterType[];
};

export type AppImageType = {
  href: string;
  src: string;
  name: string;
};

export type IconListType = {
  href: string;
  src: string;
  name: string;
};

export type AppImageListType = {
  title: string;
  appImageList: AppImageType[];
};

export const firstFooterList: FooterListType[] = [
  {
    title: 'cora',
    footerList: [
      {
        text: 'sobreNos',
        url: '/'
      },
      {
        text: 'carreira',
        url: 'https://seja.cora.com.br/'
      }
    ]
  },
  {
    title: 'produtos',
    footerList: [
      {
        text: 'contaPJ',
        url: 'https://www.cora.com.br/conta-pj-digital'
      },
      {
        text: 'cartao',
        url: 'https://www.cora.com.br/cartao-empresarial'
      },
      {
        text: 'gestaoCobrancas',
        url: 'https://www.cora.com.br/gestao-de-cobranca'
      },
      {
        text: 'boletos',
        url: 'https://www.cora.com.br/boletos'
      },
      {
        text: 'integracoes',
        url: '/'
      }
    ]
  },
  {
    title: 'explore',
    footerList: [
      {
        text: 'blog',
        url: 'https://www.cora.com.br/blog/'
      },
      {
        text: 'compredosPequenos',
        url: 'https://compredospequenos.cora.com.br/'
      },
      {
        text: 'porQueNaoCobramosTarifas',
        url: 'https://www.cora.com.br/blog/como-ganhamos-dinheiro/'
      }
    ]
  },
  {
    title: 'suporte',
    footerList: [
      {
        text: 'centralDeAjuda',
        url: 'http://meajuda.cora.com.br/'
      },
      {
        text: 'meajuda@cora.com.br',
        url: 'mailto:meajuda@cora.com.br'
      }
    ]
  }
];

export const secondFooterList: FooterListType[] = [
  {
    title: 'transparencia',
    footerList: [
      {
        text: 'termosECondicoes',
        url: 'https://www.cora.com.br/termos-uso/'
      },
      {
        text: 'politicaDePrivacidade',
        url: 'https://www.cora.com.br/politica-privacidade/'
      }
    ]
  }
];

export const appImageList: AppImageListType[] = [
  {
    title: 'baixeOApp',
    appImageList: [
      {
        name: 'playStore',
        src: require('assets/images/playStore.svg').default,
        href: 'data:image/png;base64,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'
      },
      {
        name: 'appleStore',
        src: require('assets/images/appleStore.svg').default,
        href: 'data:image/png;base64,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'
      }
    ]
  }
];

export const iconList: IconListType[] = [
  {
    name: 'instagram',
    src: require('assets/images/instagram.svg').default,
    href: 'https://www.instagram.com/seja.cora/'
  },
  {
    name: 'facebook',
    src: require('assets/images/facebook.svg').default,
    href: 'https://www.facebook.com/seja.cora/'
  },
  {
    name: 'linkedin',
    src: require('assets/images/linkedin.svg').default,
    href: 'https://br.linkedin.com/company/seja-cora'
  }
];

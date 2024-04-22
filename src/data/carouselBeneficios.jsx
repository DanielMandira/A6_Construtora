import Config from '../assets/icons/config.svg'
import Helmet from '../assets/icons/helmet.svg'
import Rules from '../assets/icons/rules.svg'
import Dollar from '../assets/icons/dollar.svg'
import Headset from '../assets/icons/headset.svg'
import Suporte from '../assets/icons/suporte.svg'
import SuportePosConstrucao from '../assets/imgs/suporte_pos_construcao.jpg'
import Tecnologias from '../assets/imgs/tecnologias_avancadas.jpg'
import Prazos from '../assets/imgs/prazos_custos.jpg'
import Atencao from '../assets/imgs/atencao_normas.jpg'
import Qualidade from '../assets/imgs/qualidade_seguranca.jpg'
import Assistencia from '../assets/imgs/assistencia.png'

const dataBene=[
    {
        id:1,
        src: Assistencia,
        title: 'ASSISTÊNCIA DO INÍCIO AO FIM',
        info: 'Assumimos a responsabilidade pela coordenação de todos os aspectos do projeto, resultando em prazos mais curtos e custos reduzidos.',
        icon: Suporte
    },
    {
        id:2,
        src: Qualidade,
        title: 'QUALIDADE E SEGURANÇA',
        info: 'Temos sistemas de controle de qualidade em vigor para garantir que cada aspecto do seu projeto seja realizado com excelência!',
        icon: Helmet
    },
    {
        id:3,
        src: Atencao,
        title: 'ATENÇÃO TOTAL ÀS NORMAS',
        info: 'Cumprimos rigorosamente todas as normas e regulamentos locais, estaduais e federais, garantindo os mais altos padrões de qualidade e segurança para o seu projeto.',
        icon: Rules
    },
    {
        id: 4,
        src: Prazos,
        title: 'PRAZOS CURTOS, CUSTOS BAIXOS',
        info: 'Ao escolher a A6 Construtora, você economiza tempo e recursos, pois assumimos a responsabilidade pela coordenação de todos os aspectos do projeto.',
        icon: Dollar
    },
    {
        id:5,
        src: Tecnologias,
        title: 'TECNOLOGIAS AVANÇADAS',
        info: 'Temos acesso a recursos e tecnologias avançadas, incluindo software de design 3D, equipamentos modernos e materiais de última geração.',
        icon: Config
    },
    {
        id: 6,
        src: SuportePosConstrucao,
        title: 'SUPORTE PÓS-CONSTRUÇÃO',
        info: 'Incluindo garantias de trabalho e serviços de manutenção preventiva, para garantir a sua total satisfação mesmo após a conclusão do projeto.',
        icon: Headset
    },
]

export default dataBene
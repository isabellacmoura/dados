# Pasta Protegida - Dados Abertos em Portugal

Este é um projeto que facilita o acesso à informação sobre dados abertos nos municípios portugueses e seus responsáveis de acesso à informação.

## 🌐 Acesso Online

A aplicação está disponível em: **https://isabellacmoura.github.io/dados/**

## 📋 Funcionalidades

- Visualização interativa do mapa de Portugal
- Informações detalhadas sobre cada município
- Interface responsiva e moderna
- Dados geográficos precisos

## 🚀 Como Usar

### Acesso Direto
1. Acesse: https://isabellacmoura.github.io/dados/
2. O widget carregará automaticamente
3. Interaja com o mapa para explorar os municípios

### Embed em Outro Site
Para incorporar o widget em outro site, use:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://isabellacmoura.github.io/dados/municipios-widget.css">
</head>
<body>
    <div id="municipios-widget"></div>
    
    <script src="https://isabellacmoura.github.io/dados/municipios-widget.iife.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            if (window.MunicipiosWidget) {
                // Instanciar o widget
                const widget = new window.MunicipiosWidget({
                    target: document.getElementById('municipios-widget')
                });
            }
        });
    </script>
</body>
</html>
```

## 📁 Estrutura do Projeto

```
git/
├── index.html              # Página principal
├── municipios-widget.js    # Script do widget
├── municipios-widget.css   # Estilos do widget
├── municipios-widget.iife.js
├── municipios-widget.umd.cjs
├── static/                 # Arquivos estáticos
│   ├── municipios.csv      # Dados dos municípios
│   ├── PortugalM.geojson   # Dados geográficos de Portugal
│   ├── shapefiles/         # Shapefiles de todos os municípios (304 arquivos)
│   ├── robots.txt          # Configuração para crawlers
│   └── favicon.svg         # Ícone do site
└── README.md              # Este arquivo
```

## 🔧 Tecnologias Utilizadas

- **Svelte** - Framework JavaScript
- **Vite** - Build tool
- **GitHub Pages** - Hospedagem

## 📝 Licença

Este projeto está disponível publicamente para uso educacional e de demonstração.

---

Desenvolvido por [Isabella Moura](https://github.com/isabellacmoura)

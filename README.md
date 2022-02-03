# सुदंर CSS (Beautiful CSS)

Sunder css is atomic css like library , but with pros of component based libraries.

But sunder css merges utility frameworks and component based frameworks to whole new level.

Example :
if you want to create a blue button :

 Component based  approach:
 ```html
 <div class="button button-blue">
 ```

 utility based  approach:
 ```html
 <div class="fw-bold bg-blue rounded p-2">
 ```

 But what if you want a arbitrary color , lets say #458abf

 utility based approad solves this problem at some extent using atomic css

  utility based atomic approach:
 ```html
 <div class="fw-bold bg-[#458abf] rounded p-2">
 ```

Well, you have soo many buttons on your website , so you would need to apply the same long class to all of the buttons.

Sundar CSS is here to rescue
In sundar css we create component using sunder utilities it self

Sundar css component syntax :
```html
<component name="$button" sunder="bg_#458abf brad_2rem p_.5rem fwt_bold">
```

and then use it in html as :
```html
<div sunder="$button">
```

but what if we want custom color in component

well , thats what sundar css adds to the current eco system

Sunder css component with argument :
```html
	<component name="$button" dArgs="red white" sunder="bg_$1 c_$2 p_.5rem brad_2rem fwt_bold">
```

Usage in html :
```html
<div sunder="$button_green_white">
```

above code will create a button with  green background and white text
and the possibilities are endless...

eg. Hover button change

```html
<div sunder="$button :h:$button_blue">
```

as we havent passed few paramters , default args will be used here.

and on hover the background will change from red (default) to blue.

another feature of sundar css is continuous pseudo classes and breakpoints

regular utility or component based :
```html
<button class="bg-blue text-white h:bg-white h:text-blue">
```

sundar css based:
```html
<button sunder="bg_blue c_white :h:bg_white:c_blue" >
```

as you can see a single class name can handle multiple styles for pseudo

ofcourse you can write them seperately ...

same for breakpoints .

regular utility or component based :
```html
<button class="bg-blue text-white sm-bg-white sm-text-blue">
```

sundar css based:
```html
<button sunder="bg_blue c_white (sm)[bg_white;c_blue]" >
```

But what if we want to create animations , here surely you have to use css.
Right ?

well not here ,

just like component you can define animations too .

sundar css animation syntax
```html
<animation name="&float">
    <state name="0%" sunder="tr_translateY(0rem)"></state>
    <state name="50%" sunder="tr_translateY(10rem)"></state>
    <state name="100%" sunder="tr_translateY(0rem)"></state>
</animation>
```

and use it in html like:

```html
<div sunder="w_3rem h_3rem bg_red a_&float`1s`infinite">
```

This will apply the above float animation to the div
also backtics will escape as spaces
so  `` &float`1s`infinite ``  will translate to ` &float 1s infinite `.

What now ?

ahh ! I am so forgetful , i forgot to tell you that animations too support arguments ;) :

sundar css animation syntax
```html
<animation name="&float" dArgs="0rem 5rem">
    <state name="0%" sunder="tr_translateY($1)"></state>
    <state name="50%" sunder="tr_translateY($2)"></state>
    <state name="100%" sunder="tr_translateY($1)"></state>
</animation>
```

and use it in html like:

```html
<div sunder="w_3rem h_3rem bg_red a_&float_$_3rem`1s`infinite">
```

`` &float_$_3rem `` here `$` represents default value and `@` can be used to omit the properties using specific values.

But is it as fast as regular css , well not as fast .. but still pretty fast .

The Below example is completely written using sundar css and it takes less than 100ms to render on chrome.

does sundar css supports react , vue , angular etc...

Yes up untill now it does supports them all.

Dynamic classes will be automatically rendered;(disabled by default)

To enable re rendering use : 

```html
<meta name="autoRender" content="true">
```
in your head tag.

Re rendering will only render required components. And it will take as less as 5ms depending on utilities.

or if you manually want to re render then just call `run()` to re render whole body or pass the element or element list to re render required elements eg `run(document.getElementsByTagName(body)[0])`.

If you dont want to call javascript everytime , then you can use

```html
<adi sunder="bg_red" >
```
which will add bg_red to css and remove adi tag. So you must know which classes will you require in future to use this feature.(faster than re rendering but requires extra effort).

# TLDR;

Check this example out ...

[Sundar Css Demo](https://narad-muni.github.io/sunder%20demo/iphone.html)

Sundar will be releasing soon ... stay tuned ! :P

(This is very new library , help it grow and please share your review ) :)

## The Below Table shows all the utilites you can add or edit them in config files .


| Alias       |      Alias Value			  			 |
|:-----------:|:----------------------------:|
|       ac    |        align-content:        |
|      ai     |         align-items:         |
|      as     |          align-self:         |
|      a      |          animation:          |
|     adel    |       animation-delay:       |
|     adir    |     animation-direction:     |
|     adur    |      animation-duration:     |
|     afm     |     animation-fill-mode:     |
|     aic     |  animation-iteration-count:  |
|      an     |        animation-name:       |
|     aps     |     animation-play-state:    |
|      ar     |         aspect-ratio:        |
|     atf     |  animation-timing-function:  |
|      bf     |     backdrop-filter:         |
|      bv     |     backface-visibility:     |
|      bg     |          background:         |
|     bga     |    background-attachment:    |
|     bbm     |    background-blend-mode:    |
|      bc     |       background-clip:       |
|     bgc     |       background-color:      |
|     bgi     |       background-image:      |
|     bgo     |      background-origin:      |
|     bgp     |     background-position:     |
|     bgr     |      background-repeat:      |
|     bgs     |       background-size:       |
|     blsz    |          block-size:         |
|      b      |            border:           |
|      bb     |         border-block:        |
|     bbc     |      border-block-color:     |
|     bbe     |       border-block-end:      |
|     bbec    |    border-block-end-color:   |
|     bbes    |    border-block-end-style:   |
|     bbew    |    border-block-end-width:   |
|     bbst    |      border-block-start:     |
|     bbsc    |   border-block-start-color:  |
|     bbss    |   border-block-start-style:  |
|     bbsw    |   border-block-start-width:  |
|     bbs     |      border-block-style:     |
|     bbw     |      border-block-width:     |
|     bbt     |        border-bottom:        |
|     bbtc    |     border-bottom-color:     |
|    bbtlr    |  border-bottom-left-radius:  |
|    bbtrr    |  border-bottom-right-radius: |
|     bbts    |     border-bottom-style:     |
|     bbtw    |     border-bottom-width:     |
|     bcl     |       border-collapse:       |
|     bcol    |         border-color:        |
|     beer    |    border-end-end-radius:    |
|     besr    |   border-end-start-radius:   |
|     bim     |         border-image:        |
|     bimo    |     border-image-outset:     |
|     bimr    |     border-image-repeat:     |
|     bims    |      border-image-slice:     |
|    bimso    |     border-image-source:     |
|     bimw    |      border-image-width:     |
|      bi     |        border-inline:        |
|     bic     |     border-inline-color:     |
|     bie     |      border-inline-end:      |
|     biec    |   border-inline-end-color:   |
|     bies    |   border-inline-end-style:   |
|     biew    |   border-inline-end-width:   |
|     bist    |     border-inline-start:     |
|    bistc    |  border-inline-start-color:  |
|    bists    |  border-inline-start-style:  |
|    bistw    |  border-inline-start-width:  |
|     bis     |     border-inline-style:     |
|     biw     |     border-inline-width:     |
|      bl     |         border-left:         |
|     blc     |      border-left-color:      |
|     bls     |      border-left-style:      |
|     blw     |      border-left-width:      |
|     brad    |        border-radius:        |
|      br     |         border-right:        |
|     brc     |      border-right-color:     |
|     brs     |      border-right-style:     |
|     brw     |      border-right-width:     |
|      bs     |        border-spacing:       |
|     bser    |   border-start-end-radius:   |
|     bssr    |  border-start-start-radius:  |
|     bsy     |         border-style:        |
|      bt     |          border-top:         |
|     btc     |       border-top-color:      |
|    btlrad   |    border-top-left-radius:   |
|    btrrad   |   border-top-right-radius:   |
|     btsy    |       border-top-style:      |
|     btw     |       border-top-width:      |
|      bw     |         border-width:        |
|      bt     |            bottom:           |
|     bsh     |          box-shadow:         |
|     bsz     |          box-sizing:         |
|     cps     |         caption-side:        |
|     crtc    |         caret-color:         |
|     clr     |            clear:            |
|      c      |            color:            |
|      cc     |         column-count:        |
|      cf     |         column-fill:         |
|      cg     |          column-gap:         |
|      cr     |         column-rule:         |
|     crc     |      column-rule-color:      |
|     crs     |      column-rule-style:      |
|     crw     |      column-rule-width:      |
|      cs     |         column-span:         |
|      cw     |         column-width:        |
|     cont    |           content:           |
|     col     |           columns:           |
|     cur     |            cursor:           |
|     dir     |          direction:          |
|     dis     |           display:           |
|    empty    |         empty-cells:         |
|      fi     |             fill:            |
|     fio     |         fill-opacity:        |
|     fil     |            filter:           |
|      f      |             flex:            |
|      fb     |          flex-basis:         |
|      fd     |        flex-direction:       |
|      ff     |          flex-flow:          |
|      fg     |          flex-grow:          |
|      fs     |         flex-shrink:         |
|      fw     |          flex-wrap:          |
|     flt     |            float:            |
|      ft     |             font:            |
|     ftf     |         font-family:         |
|     ftfs    |    font-feature-settings:    |
|     ftk     |         font-kerning:        |
|     ftsz    |          font-size:          |
|     fts     |          font-style:         |
|     ftv     |         font-variant:        |
|     ftvc    |      font-variant-caps:      |
|     ftvn    |     font-variant-numeric:    |
|     ftw     |         font-weight:         |
|     gap     |             gap:             |
|      g      |             grid:            |
|      ga     |          grid-area:          |
|     gac     |      grid-auto-columns:      |
|     gaf     |        grid-auto-flow:       |
|     gar     |        grid-auto-rows:       |
|      gc     |         grid-column:         |
|     gce     |       grid-column-end:       |
|     gcs     |      grid-column-start:      |
|      gr     |           grid-row:          |
|     gre     |         grid-row-end:        |
|     grs     |        grid-row-start:       |
|      gt     |        grid-template:        |
|     gta     |     grid-template-areas:     |
|     gtc     |    grid-template-columns:    |
|     gtr     |      grid-template-rows:     |
|      h      |            height:           |
|      hy     |           hyphens:           |
|      is     |         inline-size:         |
|      jc     |       justify-content:       |
|      ji     |        justify-items:        |
|      js     |         justify-self:        |
|      l      |             left:            |
|      ls     |        letter-spacing:       |
|      lh     |         line-height:         |
|     lsy     |          list-style:         |
|     lsyi    |       list-style-image:      |
|     lsyp    |     list-style-position:     |
|     lsyt    |       list-style-type:       |
|      m      |            margin:           |
|      my     |         margin-block:        |
|     mble    |       margin-block-end:      |
|     mbls    |      margin-block-start:     |
|      mb     |        margin-bottom:        |
|      mx     |        margin-inline:        |
|     mie     |      margin-inline-end:      |
|     mies    |     margin-inline-start:     |
|      ml     |         margin-left:         |
|      mr     |         margin-right:        |
|      mt     |          margin-top:         |
|     mkr     |            marker:           |
|     mkre    |          marker-end:         |
|     mkrm    |          marker-mid:         |
|     mkrs    |         marker-start:        |
|     msk     |             mask:            |
|     mskc    |          mask-clip:          |
|    mskco    |        mask-composite:       |
|     mski    |          mask-image:         |
|     msko    |         mask-origin:         |
|     mskp    |        mask-position:        |
|     mskr    |         mask-repeat:         |
|    msksz    |          mask-size:          |
|     mbs     |        max-block-size:       |
|    max-h    |          max-height:         |
|    max-i    |       max-inline-size:       |
|    max-w    |          max-width:          |
|    min-b    |        min-block-size:       |
|    min-h    |          min-height:         |
|    min-i    |       min-inline-size:       |
|    min-w    |          min-width:          |
|     mbm     |        mix-blend-mode:       |
|      o      |           opacity:           |
|     ord     |            order:            |
|     out     |           outline:           |
|     outc    |        outline-color:        |
|     outo    |        outline-offset:       |
|     outs    |        outline-style:        |
|     outw    |        outline-width:        |
|      ov     |           overflow:          |
|     ovw     |        overflow-wrap:        |
|     ovx     |          overflow-x:         |
|     ovy     |          overflow-y:         |
|      p      |           padding:           |
|      py     |        padding-block:        |
|     pbe     |      padding-block-end:      |
|     pbs     |     padding-block-start:     |
|      pb     |        padding-bottom:       |
|      px     |        padding-inline:       |
|     pie     |      padding-inline-end:     |
|     pis     |     padding-inline-start:    |
|      pl     |         padding-left:        |
|      pr     |        padding-right:        |
|      pt     |         padding-top:         |
|     per     |         perspective:         |
|     pero    |      perspective-origin:     |
|     plc     |        place-content:        |
|     pli     |         place-items:         |
|     pls     |          place-self:         |
|     pos     |           position:          |
|     res     |            resize:           |
|      r      |            right:            |
|      rg     |           row-gap:           |
|     scb     |       scroll-behavior:       |
|     scm     |        scroll-margin:        |
|    scmbl    |     scroll-margin-block:     |
|    scmble   |   scroll-margin-block-end:   |
|    scmbls   |  scroll-margin-block-start:  |
|     scmb    |     scroll-margin-bottom:    |
|    scmbi    |     scroll-margin-inline:    |
|    scmbie   |   scroll-margin-inline-end:  |
|    scmbis   |  scroll-margin-inline-start: |
|     scml    |      scroll-margin-left:     |
|     scmr    |     scroll-margin-right:     |
|     scmt    |      scroll-margin-top:      |
|     scp     |        scroll-padding:       |
|    scpbl    |     scroll-padding-block:    |
|    scpble   |   scroll-padding-block-end:  |
|    scpbls   |  scroll-padding-block-start: |
|     scpb    |    scroll-padding-bottom:    |
|     scpi    |    scroll-padding-inline:    |
|    scpie    |  scroll-padding-inline-end:  |
|    scpis    | scroll-padding-inline-start: |
|     scpl    |     scroll-padding-left:     |
|     scpr    |     scroll-padding-right:    |
|     scpt    |      scroll-padding-top:     |
|     scsa    |      scroll-snap-align:      |
|     scss    |       scroll-snap-stop:      |
|     scst    |       scroll-snap-type:      |
|     shm     |         shape-margin:        |
|     sho     |        shape-outside:        |
|      s      |            stroke:           |
|      sc     |         stroke-color:        |
|     sda     |       stroke-dasharray:      |
|     sdo     |      stroke-dashoffset:      |
|     slc     |        stroke-linecap:       |
|     slj     |       stroke-linejoin:       |
|      so     |        stroke-opacity:       |
|      sw     |         stroke-width:        |
|     tbs     |           tab-size:          |
|      tl     |         table-layout:        |
|      ta     |          text-align:         |
|     tal     |       text-align-last:       |
|      td     |       text-decoration:       |
|     tdc     |    text-decoration-color:    |
|     tdl     |     text-decoration-line:    |
|     tdsl    |   text-decoration-skip-ink:  |
|     tds     |    text-decoration-style:    |
|      te     |        text-emphasis:        |
|     tec     |     text-emphasis-color:     |
|     tep     |    text-emphasis-position:   |
|     tes     |     text-emphasis-style:     |
|      ti     |         text-indent:         |
|      to     |        text-overflow:        |
|      ts     |         text-shadow:         |
|      tt     |        text-transform:       |
|     tup     |   text-underline-position:   |
|      t      |             top:             |
|      tr     |          transform:          |
|     tro     |       transform-origin:      |
|     trs     |       transform-style:       |
|     trn     |          transition:         |
|     trnd    |       transition-delay:      |
|    trndu    |     transition-duration:     |
|     trnp    |     transition-property:     |
|     trtf    |  transition-timing-function: |
|      us     |         user-select:         |
|      va     |        vertical-align:       |
|     vis     |          visibility:         |
|      wi     |            widows:           |
|     wsp     |         white-space:         |
|      w      |            width:            |
|      wb     |          word-break:         |
|      ws     |         word-spacing:        |
|      ww     |          word-wrap:          |
|      wm     |         writing-mode:        |
|      z      |           z-index:           |

| Breakpoints |            Value			  			 |
|:-----------:|:----------------------------:|
|      sm     |             640px            |
|      md     |             768px            |
|      lg     |            1024px            |
|      xl     |            1280px            |
|     xxl     |            1536px            |
|			p				|							print							|
|      -w     |             width            |
|      -h     |            height            |
|      -sm    |             min sm           |
|      sm     |            max sm            |

| Pseudo Class|            Value			  			 |
|:-----------:|:----------------------------:|
|      h      |             hover            |
|      a      |            active            |
|      f      |             focus            |
|      v      |            visited           |

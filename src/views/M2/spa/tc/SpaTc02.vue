<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-tc-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO  PUEDE USTED  EXPERIMENTAR  EL AMOR Y  PERDÓN DE  DIOS?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 2.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO PUEDE USTED EXPERIMENTAR EL AMOR Y PERD&Oacute;N DE DIOS?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ EL PERD&Oacute;N QUE DIOS OFRECE</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>&iquest;Alguna vez le resulta dif&iacute;cil creer que en Jesucristo tiene usted el perd&oacute;n total de sus pecados? Quiz&aacute; lo crea intelectualmente, pero &iquest;qu&eacute; sucede en lo profundo de su coraz&oacute;n?</p>

<p>Imag&iacute;nese que usted est&aacute; en medio de la multitud cuando ocurre el incidente relatado en el evangelio seg&uacute;n San Lucas: &ldquo;Unos hombres que tra&iacute;an en un lecho a un hombre que estaba paral&iacute;tico, procuraban llevarle adentro y ponerle delante de &eacute;l.</p>

<p>Al ver &eacute;l la fe de ellos, le dijo: Hombre tus pecados te son perdonados.&rdquo;</p>

<p>&ldquo;Entonces los escribas y los fariseos comenzaron a cavilar, diciendo: &iquest;Qui&eacute;n es &eacute;ste que habla blasfemias? &iquest;Qui&eacute;n puede perdonar pecados sino s&oacute;lo Dios?</p>

<p>Jes&uacute;s entonces, conociendo los pensamientos de ellos, respondiendo les dijo:</p>

<p>&iquest;Qu&eacute; cavilais en vuestros corazones? ...Pues para que sep&aacute;is que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados (dijo al paral&iacute;tico): A ti te digo: Lev&aacute;ntate, toma tu lecho, y vete a tu casa.&rdquo;</p>

<p>&iexcl;Qu&eacute; maravillosa ilustraci&oacute;n de la disposici&oacute;n de Dios para perdonar!</p>

<p>La santa Palabra de Dios nos dice que Jesucristo, a trav&eacute;s de Su muerte en la cruz, nos hace libres - libres del pecado, libres de la ley, libres de la esclavitud de la culpa que acarrean el pecado y la ley.</p>

<p>Tal vez le resulta dif&iacute;cil creer en su coraz&oacute;n que sus pecados han sido pagados. Quiz&aacute;s est&aacute; pensando, &ldquo;yo tengo pensamientos lujuriosos hacia una persona del sexo opuesto.&rdquo; o, &ldquo;yo he estado tomando el nombre del Se&ntilde;or en vano. Dios no perdonar&aacute; eso, &iquest;no es cierto?&rdquo;</p>

<p>La realidad es que &Eacute;l lo ha perdonado. Usted simplemente necesita apropiarse de Su perd&oacute;n y creer en Su promesa. Lo que &Eacute;l promete es:</p>

<div class="quote-left">Porque como la altura de los cielos sobre la tierra, engrandeci&oacute; su misericordia sobre los que le temen. Cuanto est&aacute; lejos el oriente del &laquo;occidente, hizo alejar de nosotros nuestras rebeliones.</div>

<p>Ese es el perd&oacute;n que Dios ofrece. Piense en esto. Llega a ser suyo desde el momento en que usted cree en Jesucristo como su Salvador, y como un acto de voluntad lo recibe a El en su vida por fe, como Su Salvador y Se&ntilde;or.</p>

</div>

<p>&nbsp;</p>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ LA RELACI&Oacute;N M&Aacute;S GRANDE QUE USTED HAYA EXPERIMENTADO</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>Jes&uacute;s de Nazaret es la personalidad m&aacute;s destacada, m&aacute;s poderosa, singular y atractiva de todos los tiempos. Conocerlo personalmente como su Salvador y Se&ntilde;or, es el fundamento de la relaci&oacute;n m&aacute;s grande que usted pueda tener, debido a que s&oacute;lo a trav&eacute;s de Jes&uacute;s se puede experimentar el amor y perd&oacute;n de Dios. Perm&iacute;tame explicarle por qu&eacute;.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h3>+ 1. Jes&uacute;s declar&oacute; ser Dios</h3></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>Un invierno, durante la celebraci&oacute;n de la Fiesta de la Dedicaci&oacute;n, Jes&uacute;s estaba caminando frente al p&oacute;rtico del templo de Salom&oacute;n en Jerusal&eacute;n. Una multitud se reuni&oacute; a su alrededor pregunt&aacute;ndole, &ldquo;&iquest;Hasta cu&aacute;ndo nos turbar&aacute;s el alma? Si t&uacute; eres el Cristo, d&iacute;noslo abiertamente.</p>

<p>&ldquo;Jes&uacute;s les respondi&oacute;: Os lo he dicho, y no cre&eacute;is; las obras que yo hago en nombre de mi Padre, ellas dan testimonio de m&iacute;...Yo y el Padre uno somos.&rdquo;</p>

<p>Esta declaraci&oacute;n del Se&ntilde;or Jesucristo cobra a&uacute;n m&aacute;s fuerza debido a que &Eacute;l cumpli&oacute; las profec&iacute;as. Cientos de a&ntilde;os antes de que Jes&uacute;s viniera a la tierra, varios profetas de Israel predijeron Su maravilloso nacimiento, el lugar de Su nacimiento, Su naturaleza divina, el prop&oacute;sito de Su ministerio, c&oacute;mo ser&iacute;a Su muerte, y que resucitar&iacute;a. Estas profec&iacute;as representan s&oacute;lo algunas de las muchas predicciones hechas acerca de la vida, ministerio, muerte y resurrecci&oacute;n de Jesucristo. El cumpli&oacute; con todo, hasta en el &uacute;ltimo detalle.</p>

<div class="block-quote">Jes&uacute;s de Nazaret es la personalidad m&aacute;s destacada, m&aacute;s poderosa, singular y atractiva de todos los tiempos. Conocerlo personalmente como su Salvador y Se&ntilde;or, es el fundamento de la relaci&oacute;n m&aacute;s grande que usted pueda tener, debido a que s&oacute;lo a trav&eacute;s de Jes&uacute;s se puede experimentar el amor y perd&oacute;n de Dios.</div>

<p>Despu&eacute;s de su cruel crucifixi&oacute;n, Jesucristo demostr&oacute; que &Eacute;l era Dios levant&aacute;ndose de la muerte y apareciendo a cientos de personas en un per&iacute;odo de cuarenta d&iacute;as, as&iacute; como a quinientas personas en una sola reuni&oacute;n.</p>

<p>Luego, mientras sus seguidores observaban maravillados, Jes&uacute;s regres&oacute; a los cielos, luego de prometer una relaci&oacute;n continua con aquellos que lo amaban.</p>

<p>La santa e inspirada Palabra de Dios tambi&eacute;n confirma lo que Jes&uacute;s declar&oacute;. El ap&oacute;stol Pablo en su carta a los Romanos nos dice, .&rdquo;..que &eacute;l hab&iacute;a prometido antes por sus profetas en las santas Escrituras, acerca de su Hijo, nuestro Se&ntilde;or Jesucristo, que era del linaje de David seg&uacute;n la carne, que fue declarado Hijo de Dios con poder, seg&uacute;n el Esp&iacute;ritu de santidad, por la resurrecci&oacute;n de entre los muertos.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h3>+ 2. Jes&uacute;s vino para proveer la vida que usted necesita</h3></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>Jes&uacute;s no vivi&oacute; en la tierra s&oacute;lo por probar que &Eacute;l era Dios. El vino a darle a usted vida eterna, a ofrecerle perd&oacute;n, a liberarlo del pecado y la culpa, a darle una vida plena y significativa aqu&iacute; en la tierra. Como Jes&uacute;s es Dios puede proveer el perd&oacute;n de los pecados y capacitarlo para vivir la vida abundante.</p>

<p>Pablo escribi&oacute;, &ldquo;Ahora, pues, ninguna condenaci&oacute;n hay para los que est&aacute;n en Cristo Jes&uacute;s, los que no andan conforme a la carne, sino conforme al Esp&iacute;ritu. Porque la ley del Esp&iacute;ritu de vida en Cristo Jes&uacute;s me ha librado de la ley del pecado y de la muerte.&rdquo;</p>

<p>La herencia de todo cristiano es una vida rica y satisfactoria. Jes&uacute;s quiso que la vida cristiana fuera una aventura emocionante, abundante.</p>

<p>&Eacute;l prometi&oacute;, &ldquo;Yo he venido para que (ustedes) tengan vida y para que la tengan en abundancia.&rdquo; Cuando usted camina en una relaci&oacute;n estrecha con nuestro Se&ntilde;or, y en el control del Esp&iacute;ritu Santo, cada d&iacute;a estar&aacute; lleno de maravillas, y de profundo significado y prop&oacute;sito - su vida desbordar&aacute; con cualidades deseables:</p>

<div class="quote-right">El fruto del Esp&iacute;ritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.</div>

<p>Pero la mayor&iacute;a de los cristianos no experimentan la vida abundante. La vida de gozo y victoria modelada y prometida por nuestro Se&ntilde;or les es totalmente extra&ntilde;a. Al contrario, la consideran como una carga, un trabajo, una cruz terrible de llevar. Ellos soportan el cristianismo en la tierra, esperando alcanzar el alivio al llegar finalmente al cielo.</p>

<p>Jes&uacute;s nunca quiso que usted viviera una existencia fracasada y terrible, &Eacute;l le ha llamado a vivir una vida de gozo y victoria. Cualquiera que sea la circunstancia en que usted se encuentre - tranquilidad o conflicto, abundancia o escasez, salud o enfermedad, libertad o persecuci&oacute;n - nuestro Se&ntilde;or promete paz.</p>

<p>El dijo que nunca lo dejar&iacute;a, y que si usted pide algo en Su nombre, El lo har&aacute;.</p>

<p>Dios le ha prometido a usted una herencia de ayuda, abundancia y gozo s&oacute;lo por el hecho de ser cristiano. Entonces, &iquest;por qu&eacute; son tan pocos los cristianos que est&aacute;n realmente disfrutando su herencia? Perm&iacute;tame preguntarle: &iquest;Vive usted una vida gozosa y fruct&iacute;fera?</p>

<p>En su Introducci&oacute;n a las Ep&iacute;stolas del Nuevo Testamento, J.B. Phillips escribe:</p>

<div class="quote-left">Hay una vasta diferencia entre el cristianismo del primer siglo y el (cristianismo) actual. Para nosotros, con bastante frecuencia, el cristianismo es un c&oacute;digo de &eacute;tica, una filosof&iacute;a de vida, una norma de comportamiento, pero para aquellos cristianos del primer siglo, era una nueva calidad de vida juntos. No dudaron en describir esta experiencia como a Cristo viviendo en ellos. Tal vez si crey&eacute;ramos lo que ellos creyeron, podr&iacute;amos alcanzar lo que ellos alcanzaron.</div>

<p>La iglesia del primer siglo sacudi&oacute; su mundo. Llena del Esp&iacute;ritu e impulsada por el amor de Dios, la Iglesia primitiva llev&oacute; las Buenas Nuevas del amor y perd&oacute;n de Dios a todo el mundo conocido. Nunca antes un peque&ntilde;o grupo de hombres y mujeres comunes y corrientes hab&iacute;an logrado producir tal impacto en el mundo.</p>

<p>Aquellos cristianos formaban un grupo de personas comunes, como usted o yo, pero que conoc&iacute;an el amor y perd&oacute;n de Dios. Controlados y dirigidos por el Esp&iacute;ritu Santo de Dios, alcanzaron con amor a las personas que viv&iacute;an bajo la tiran&iacute;a de un imperio malvado y corrupto.</p>

<p>Si usted ha experimentado el amor y perd&oacute;n de Dios en su vida, tambi&eacute;n puede influenciar su mundo.</p>

<p>El mundo actual est&aacute; lleno de ansiedad, temor y crisis. Gran parte del mundo vive en un estado de caos. Nada caracteriza tanto la condici&oacute;n de nuestros d&iacute;as como la palabra &ldquo;trastorno.&rdquo; En todas las facetas de la sociedad, y en todo pa&iacute;s del mundo, hay trastorno - en lo pol&iacute;tico, lo social, y lo econ&oacute;mico, incluyendo tambi&eacute;n el aspecto religioso.</p>

<div class="block-quote">Las soluciones humanas que se han propuesto son innumerables, pero la crisis es cada vez mayor. Las personas como nunca antes, est&aacute;n buscando la paz en sus relaciones conflictivas,las respuestas al vac&iacute;o que corroe sus vidas por algo m&aacute;s. La gente busca algo m&aacute;s.</div>

<p>En Estados Unidos por ejemplo, somos testigos de una epidemia de cr&iacute;menes, de adicci&oacute;n a las drogas y alcohol. Hay una epidemia de pornograf&iacute;a, de SIDA y de otras enfermedades ven&eacute;reas. Hay epidemia de abortos, de hogares destruidos y tambi&eacute;n de divorcios, s&oacute;lo para mencionar algunos de los serios problemas que enfrenta nuestra naci&oacute;n.</p>

<p>Las soluciones humanas que se han propuesto son innumerables, pero la crisis es cada vez mayor. Las personas como nunca antes, est&aacute;n buscando la paz en sus relaciones conflictivas,las respuestas al vac&iacute;o que corroe sus vidas por algo m&aacute;s. La gente busca algo m&aacute;s.</p>

<p>Debido a esto, son muchos los que est&aacute;n comenzando a regresar a Dios. Nunca hab&iacute;a habido un clima tan propicio como el de ahora para presentar a Cristo. El Esp&iacute;ritu de Dios ha creado un hambre sin precedentes en los corazones. Cada d&iacute;a son m&aacute;s las personas que se est&aacute;n volviendo a Cristo y que est&aacute;n experimentando el maravilloso amor y perd&oacute;n de Dios.</p>

<p>A pesar de eso, es una cantidad relativamente peque&ntilde;a de cristianos los que est&aacute;n participando en esta gran cosecha. En medio de estas grandes oportunidades, la mayor&iacute;a de los cristianos no han ingresado en el gozo de levantar la gran cosecha que Dios ha preparado. La mayor&iacute;a de los creyentes viven en impotencia espiritual, en fracaso, y falta de fruto. El cristiano com&uacute;n, y aun muchos pastores, es rara la vez que conducen a otra persona a Cristo.</p>

<p>Desafortunadamente, muchos cristianos no demuestran una calidad de vida que anime a los dem&aacute;s a anhelar una relaci&oacute;n con nuestro Se&ntilde;or. Algunos creyentes ni siquiera reflejan una calidad de vida que anime a los dem&aacute;s a relacionarse con ellos mismos.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ USTED PUEDE DEJAR DE VIVIR UNA VIDA SIN FRUTO</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>Al hablar con millones de cristianos alrededor del mundo, encontr&eacute; que la mayor&iacute;a de los creyentes fracasados, frustrados y sin fruto quieren cambiar, pero no saben qu&eacute; hacer. Para ellos, as&iacute; como para usted, tengo un mensaje de ayuda y esperanza: Usted puede dejar de vivir una vida fracasada y sin fruto. Puede experimentar la vida plena y abundante que Dios ha prometido a todos Sus hijos a trav&eacute;s de Jesucristo.</p>

<p>Un d&iacute;a, cuando conduc&iacute;a mi auto en una ciudad extra&ntilde;a, di una vuelta incorrecta y me encontr&eacute; conduciendo en sentido contrario, en una calle de una sola v&iacute;a.</p>

<p>Las personas que caminaban a los lados me avisaron que estaba tomando la direcci&oacute;n equivocada, pero yo ya me hab&iacute;a dado cuenta de eso un segundo despu&eacute;s de girar. Mi problema no era decidir si iba o no en la direcci&oacute;n correcta, sino en c&oacute;mo dar vuelta hacia la direcci&oacute;n correcta. Enseguida y con la ayuda de un atento polic&iacute;a, logr&eacute; cambiar mi direcci&oacute;n por la correcta y aliviado y feliz, empec&eacute; a conducir de acuerdo al tr&aacute;fico. Lo mismo sucede en la vida cristiana. Si usted realiza un giro incorrecto y se encuentra fracasado y frustrado, no necesita que nadie le diga que se encuentra yendo en la direcci&oacute;n equivocada. Lo que necesita es que alguien le ayude a encontrar el camino correcto.</p>

<p>La Biblia, la Palabra inspirada de Dios, provee gu&iacute;a. El ap&oacute;stol Pablo escribi&oacute;:</p>

<div class="quote-left">Todo la Escritura es inspirada por Dios, y &uacute;til para ense&ntilde;ar, para redarg&uuml;ir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.</div>

<p>La Biblia no s&oacute;lo instruye, sino que tambi&eacute;n le muestra d&oacute;nde ha dado usted esa vuelta que lo mand&oacute; en la direcci&oacute;n equivocada. La Biblia le ayuda a corregir el curso y luego lo capacita para continuar en el camino correcto.</p>

<p>Para comprender el problema de los cristianos mal orientados y sin fruto, es importante que usted sepa lo que la Biblia dice acerca del problema. Esta revela que hay tres clases de personas en el mundo: el hombre natural, el cristiano espiritual y el creyente mundano. Perm&iacute;tame compartirle brevemente las caracter&iacute;sticas de estas 3 clases de personas.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h3>+ 1. El hombre natural</h3></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->
<img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc2-1.png" style="float:right; width:50%" />
<p>Antes de ser cristiano, usted era lo que la Biblia llama una persona &ldquo;natural&rdquo;:</p>

<p>Representemos una imagen. Hay un c&iacute;rculo, el c&iacute;rculo representa su vida, y dentro de &eacute;l, hay un trono. El trono representa el centro del control o la voluntad. Usted estaba viviendo bajo el dominio de Satan&aacute;s. Su naturaleza carnal, dirigida por Satan&aacute;s, estaba &ldquo;en el trono&rdquo;, controlando su vida. Cristo estaba fuera de su vida, tocando la puerta, queriendo liberarlo del dominio de Satan&aacute;s, tray&eacute;ndole Su amor, perd&oacute;n y vida eterna.</p>

<p>La persona natural considera las cosas del Esp&iacute;ritu de Dios como locuras. El ap&oacute;stol Pablo escribe:</p>

<div class="quote-left">Pero el hombre natural no percibe las cosas que son del Esp&iacute;ritu de Dios, porque para &eacute;l son locura, y no las puede &laquo;entender, porque se han de discernir espiritualmente.</div>

<p>Dependiendo totalmente en sus propios recursos, usted estaba espiritualmente muerto para Dios y separado de &Eacute;l a causa del pecado.&rdquo;</p>

<p>Luego, usted rindi&oacute; su vida a Jesucristo</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h3>+ 2. El cristiano espiritual</h3></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc2-2.png" style="float:right; width:50%" />Cuando usted lo invit&oacute;, Cristo entr&oacute; en su vida y tom&oacute; el trono para guiarlo y fortalecerlo para vivir para &Eacute;l. En ese momento, Su Esp&iacute;ritu Santo empez&oacute; a morar en usted, le dio un nuevo nacimiento, lo sell&oacute; para los cielos, y lo bautiz&oacute; en el cuerpo de creyentes. Con Cristo (Esp&iacute;ritu) en el trono, usted est&aacute; &ldquo;lleno&rdquo; (controlado y dirigido) del Esp&iacute;ritu Santo.</p>

<p>El cristiano espiritual comprende las cosas de Dios. El ap&oacute;stol Pablo escribi&oacute;:</p>

<div class="quote-right">En cambio, el espiritual juzga todas las cosas, pero &eacute;l no es juzgado de nadie. Porque, &iquest;qui&eacute;n conoci&oacute; la mente del Se&ntilde;or? &iquest;qui&eacute;n le instruir&aacute;? Mas nosotros tenemos la mente de Cristo.</div>

<p>El acto de estar &ldquo;lleno&rdquo; del Esp&iacute;ritu consiste en mantener deliberadamente a Cristo en el trono de su vida. El no le pedir&aacute; el control en contra de su voluntad. Si a pesar de Su gu&iacute;a y advertencia, usted desea rendirse a la influencia de su carne y arrebatarle a Dios el control para cometer pecado manifiesto o en secreto, El, con tristeza, le dejar&aacute;. Cuando usted pasa por este estado de pecado sin confesar, la Palabra de Dios lo describe como ser una persona &ldquo;mundana&rdquo; o &ldquo;carnal.&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><h3>+ 3. El creyente mundano</h3></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc2-3.png" style="float:right; width:60%" />Hay una gran diferencia entre un cristiano y un no cristiano. La Biblia claramente ense&ntilde;a en 2 Corintios 5:17, &ldquo;De modo que si alguno est&aacute; en Cristo, nueva criatura es; las cosas viejas pasaron; he aqu&iacute; todas son hechas nuevas.&rdquo; Tambi&eacute;n, &ldquo;El que dice que permanece en &eacute;l, debe andar como &eacute;l anduvo.&rdquo;</p>

<p>Pero a menudo, como el ap&oacute;stol Pablo escribe en 1 Corintios 3, los cristianos mundanos act&uacute;an como un no creyente, y es muy dif&iacute;cil encontrar la diferencia.</p>

<p>El cristiano mundano es aquel que ha recibido a Cristo pero que todav&iacute;a permite que su naturaleza carnal le reclame el trono por medio del pecado. Dios todav&iacute;a tiene posesi&oacute;n de esta persona y Cristo todav&iacute;a est&aacute; en su vida, pero esta persona ha ca&iacute;do en pecado en una o m&aacute;s &aacute;reas de su vida. Por no estar rendido a Cristo, el creyente mundano se encuentra en un plano de estancamiento en su crecimiento espiritual, debido a que no confiesa ni se arrepiente de sus pecados. Satan&aacute;s ha tenido &eacute;xito en influenciarlo y controlarlo por medio de la carne.</p>

<p>El ap&oacute;stol Pablo escribe a los cristianos de Corinto:</p>

<div class="quote-left">De manera que yo, hermanos, no pude hablaros como a espirituales, sino como a carnales, como a ni&ntilde;os en Cristo. Os di a beber leche, y no vianda; porque a&uacute;n no erais capaces, ni sois capaces todav&iacute;a, porque a&uacute;n sois carnales; pues habiendo entre vosotros celos, contiendas y &laquo; disensiones, &iquest;no sois carnales, y and&aacute;is como hombres?</div>

<p>El cristiano mundano o carnal ciertamente experimenta la convicci&oacute;n del Esp&iacute;ritu Santo y no continuar&aacute; en sus pecados indefinidamente; de otro modo, es posible que ni siquiera sea cristiano. Sin embargo, fracasado y sin fruto, est&aacute; dependiendo de sus propios esfuerzos y de su fuerza de voluntad para vivir la vida cristiana, en vez de apropiarse de los recursos sobrenaturales e inagotables del Esp&iacute;ritu Santo.</p>

<p>Aferr&aacute;ndose a sus intereses egoc&eacute;ntricos por un lado y buscando a tientas las bendiciones de Dios por el otro, esta persona fracasa una y otra vez en vivir la vida cristiana en la llenura y el poder del Esp&iacute;ritu Santo.</p>

<p>El estado de carnalidad, o sea de pecados sin confesar, es en realidad una existencia infeliz y miserable. Tristemente, &eacute;sta es la situaci&oacute;n en la que actualmente se encuentran millones de cristianos - de nuevo en el trono de sus vidas - y a menudo ni se dan cuenta de que est&aacute;n en esta categor&iacute;a carnal. Un hombre me dijo que toda su vida hab&iacute;a o&iacute;do a su pastor hablar de los cristianos carnales, pero que siempre entendi&oacute; que su pastor se refer&iacute;a a otras personas. Para &eacute;l fue una sorpresa y un choque descubrir que &eacute;l mismo era un cristiano carnal.</p>

<p>El ap&oacute;stol Pablo sab&iacute;a lo que significaba ser mundano. En la ep&iacute;stola a los Romanos, cap&iacute;tulo siete &eacute;l escribe:</p>

<div class="quote-right">Porque sabemos que la ley es espiritual; mas yo soy carnal, vendido al pecado. Porque lo que hago, no lo entiendo; pues no hago lo que quiero, sino lo que aborrezco, eso hago. Y si lo que no quiero, esto hago, apruebo que la ley es buena. De manera que ya no soy yo quien hace aquello, sino el pecado que mora en m&iacute;. Y yo s&eacute; que en m&iacute;, esto es, en mi carne, no mora el bien; porque el querer el bien est&aacute; en m&iacute;, pero no el hacerlo. Porque no hago el bien que quiero, sino el mal que no quiero, eso hago. Y si hago lo que no quiero, ya no lo hago yo, sino el pecado que mora en m&iacute;.</div>

<p>&iquest;Dir&iacute;a usted que este pasaje de la Biblia, describe su actual relaci&oacute;n con Dios?</p>

<p>En Detroit, Michigan, una pareja de avanzada edad fue llevada al hospital sufriendo de desnutrici&oacute;n y agotamiento. Cuando la polic&iacute;a comenz&oacute; a buscar en su hogar desordenado y lleno de basura, descubri&oacute; m&aacute;s de cuarenta mil d&oacute;lares en efectivo escondidos entre sus pertenencias. Hac&iacute;a mucho tiempo que se hab&iacute;an olvidado que pose&iacute;an esa fortuna.</p>

<p>De la misma forma, el cristiano mundano vive en pobreza espiritual, como si fuera un ateo en la pr&aacute;ctica, profesando creer en Dios, act&uacute;a como si Dios no existiera o no estuviera dispuesto a ayudarle. No logra comprender el significado de la muerte de Jes&uacute;s en la cruz y de Su resurrecci&oacute;n de la muerte. Jesucristo no s&oacute;lo pag&oacute; el precio de sus pecados, sino que realmente anul&oacute; el poder del pecado en su vida. El ap&oacute;stol Pablo comprendi&oacute; la angustia y la frustraci&oacute;n que resultan al intentar vivir la vida cristiana con la pura fuerza de voluntad.</p>

<div class="quote-left">As&iacute; que, queriendo yo hacer el bien, hallo esta ley: que el mal est&aacute; en m&iacute;. Porque seg&uacute;n el hombre interior, me deleito en la ley de Dios; pero veo otra ley en mis miembros, que se rebela contra la ley de mi mente, y que me lleva cautivo a la ley del pecado que est&aacute; en mis miembros.&nbsp;&iexcl;Miserable de m&iacute;! &iquest;qui&eacute;n me librar&aacute; de este cuerpo de muerte?</div>

<p>&iquest;Se pregunt&oacute; alguna vez, &laquo;Qui&eacute;n me librar&aacute; de mi desagradable car&aacute;cter, de mi egocentrismo y de mis fracasos y mis defectos?&rdquo; &iexcl;Hay Buenas Nuevas! Observe la respuesta del ap&oacute;stol Pablo:</p>

<p>&iexcl;Gracias a Dios, que Cristo lo ha logrado! &iexcl;Jes&uacute;s me libert&oacute;!</p>

<p>El pastor de una gran iglesia se acerc&oacute; a conversar conmigo despu&eacute;s que present&eacute; un mensaje sobre c&oacute;mo experimentar el amor y el perd&oacute;n de Dios. Se notaba lleno de odio y de resentimiento hacia los l&iacute;deres laicos de su anterior iglesia, pues sent&iacute;a que &eacute;stos le hab&iacute;an causado un gran da&ntilde;o y que, inclusive, hab&iacute;an tratado de destruir su ministerio.</p>

<p>Ahora, este pastor se hab&iacute;a dado cuenta que a causa de querer desquitarse, &eacute;l mismo se hab&iacute;a convertido en un cristiano vengativo, critic&oacute;n y mundano. Hab&iacute;a llegado al punto en el que s&oacute;lo hab&iacute;a dos opciones, o ponerse bien con Dios o dejar el pastorado. Como &eacute;l lo mencion&oacute;, &ldquo;Esta mundanalidad cancerosa est&aacute; destruyendo mi vida y mi ministerio.&rdquo;</p>

<p>Cuando nos arrodillamos juntos para pedir el amor y el perd&oacute;n de Dios, sus l&aacute;grimas de arrepentimiento fueron seguidas por l&aacute;grimas de gozo. Algunos d&iacute;as despu&eacute;s &eacute;l fue a visitar a los l&iacute;deres de la iglesia a quienes antes hab&iacute;a odiado, y cuando les dijo que los amaba y les pidi&oacute; perd&oacute;n, los l&iacute;deres respondieron con gozo y amor cristiano. Este amado pastor volvi&oacute; a su segunda iglesia con un coraz&oacute;n ardiente de amor y renovado celo por nuestro Se&ntilde;or.</p>

<p>Un hombre de negocios de otra iglesia vino un d&iacute;a a verme. Se ve&iacute;a grandemente angustiado porque su iglesia estaba dividida.</p>

<p>&ldquo;La mitad de nuestros miembros se ir&aacute;n y comenzar&aacute;n otra iglesia,&rdquo; dijo.</p>

<p>Esto tambi&eacute;n me angusti&oacute;, porque no puedo imaginar nada m&aacute;s tr&aacute;gico que un grupo de cristianos dividido.</p>

<p>Conforme convers&aacute;bamos, el hombre descubri&oacute; y admiti&oacute; que era un cristiano mundano. Le expliqu&eacute; c&oacute;mo Dios hab&iacute;a provisto la soluci&oacute;n para que &eacute;l fuera una persona espiritual. Realmente no ten&iacute;a por qu&eacute; continuar viviendo como un cristiano mundano, carnal. Finalmente, nos arrodillamos juntos y oramos. El pidi&oacute; perd&oacute;n por sus pecados e invit&oacute; a Dios a llenar y controlar su vida a trav&eacute;s del Esp&iacute;ritu Santo. Cuando nos regociamos por lo que Dios hab&iacute;a hecho, me dijo, &ldquo;Ahora ya no habr&aacute; ning&uacute;n problema en mi iglesia. &iexcl;Yo soy el que hab&iacute;a estado causando todos los problemas!&rdquo;</p>

<p>Desafortunadamente, el &aacute;cido corrosivo de la mundanalidad no s&oacute;lo consume a las iglesias. Tambi&eacute;n disuelve matrimonios, hogares, familias enteras y trabajos. Usted puede sentir los efectos en su vida cuando las relaciones con sus seres queridos se han deteriorado y cuando sus amigos se han convertido en conocidos indiferentes.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary8" class="summary"><h2>+ USTED ES LIBRE PARA VIVIR COMO UN CRISTIANO ESPIRITUAL</h2></div>
<div class="collapsed" id ="Text8">
<!-- end default revealSummary -->

<p>Usted puede descubrir la misma libertad que el ap&oacute;stol Pablo encontr&oacute;. Y puede disfrutar la victoria sobre la que &eacute;l escribi&oacute; en su carta a los Romanos, cap&iacute;tulo 8:</p>

<div class="quote-left">Ahora, pues, ninguna condenaci&oacute;n hay para los que est&aacute;n en Cristo Jes&uacute;s, los que no andan conforme a la carne, sino conforme al Esp&iacute;ritu. Porque la ley del Esp&iacute;ritu de vida en Cristo Jes&uacute;s me ha librado de la ley del pecado y de la muerte.<br />
<br />
Porque lo que era imposible para la ley, por cuanto era d&eacute;bil por la carne, Dios, enviando a su Hijo en semejanza de carne de pecado y a causa del pecado, conden&oacute; al pecado en la carne; para que la justicia de la ley se cumpliese en nosotros, que no andamos conforme a la carne, sino conforme al Esp&iacute;ritu.</div>

<p>El Esp&iacute;ritu Santo le proporciona poder para vivir como una persona espiritual. Por a&ntilde;os hab&iacute;a buscado a Dios con todo mi coraz&oacute;n. Hab&iacute;a intentado toda forma posible de disciplina personal, incluyendo los d&iacute;as de ayuno y oraci&oacute;n, suplic&aacute;ndole a Dios que me diera Su poder. Cuanto m&aacute;s lo intentaba m&aacute;s frustrado me sent&iacute;a. Luego, un d&iacute;a, mientras estudiaba este pasaje en la ep&iacute;stola a los Romanos, le&iacute; un vers&iacute;culo que cambi&oacute; mi perspectiva:</p>

<div class="quote-left">Pues la naturaleza pecaminosa es enemiga de Dios &laquo; nunca obedeci&oacute; las leyes de Dios y jam&aacute;s lo har&aacute;</div>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc2-4.png" style="float:right; width:50%" />&iexcl;Qu&eacute; alivio descubrir que nunca podr&iacute;a vivir la vida cristiana por mis propios esfuerzos. Debo confiar en que Cristo viva Su vida resucitada a trav&eacute;s de mi. S&oacute;lo &Eacute;l pod&iacute;a capacitarme para vivir como yo deber&iacute;a. La vida cristiana es una vida sobrenatural y s&oacute;lo Cristo, por medio del poder del Esp&iacute;ritu Santo, puede capacitarlo para vivirla.</p>

<p>Las distintas formas de disciplina religiosa que el hombre se impone a s&iacute; mismo, s&oacute;lo conducen al fracaso y a la frustraci&oacute;n. El Esp&iacute;ritu Santo lo libera del siniestro poder del pecado y de la muerte. S&oacute;lo el poder del Esp&iacute;ritu Santo nos da la victoria.</p>

<p>Por fe, usted puede experimentar el amor y perd&oacute;n de Dios y vivir como una persona espiritual. La fe, no su esfuerzo propio, es lo que agrada a Dios.</p>

<p>Pero no s&oacute;lo es suficiente tener fe en la fe misma. En un d&iacute;a de invierno, un hombre puede tener gran fe en que el hielo del lago sostendr&aacute; su peso. Con gran fe puede caminar valientemente sobre el fr&aacute;gil hieIo - y &iexcl;de pronto llevarse una helada sorpresa!</p>

<p>Usted debe poner su fe, d&eacute;bil o fuerte, en un objeto digno de total confianza. El objeto de la fe cristiana es el Se&ntilde;or Jesucristo y Su santa e inspirada Palabra, La Biblia. S&oacute;lo nuestro Se&ntilde;or tiene el poder de librarlo de una vida mundana y proporcionarle una relaci&oacute;n gozosa, llena de bendiciones y fruto espiritual.</p>

<p>Usted debe poner su fe en el Dios fiel y en Su Palabra. Cuanto m&aacute;s conozca a Dios, mayor confianza le tendr&aacute; y cuanto m&aacute;s conf&iacute;e en El, m&aacute;s experimentar&aacute; Su amor incondicional y Su poder ilimitado.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary9" class="summary"><h2>+ C&Oacute;MO RECIBIR EL AMOR Y EL PERD&Oacute;N DE DIOS</h2></div>
<div class="collapsed" id ="Text9">
<!-- end default revealSummary -->

<p>&iquest;Ha dudado alguna vez del perd&oacute;n de Cristo? Si es as&iacute;, tengo buenas nuevas para usted. La muerte de Cristo, por usted, es el fundamento del perd&oacute;n. Debido a la muerte sustitutoria de Cristo en la cruz, su perd&oacute;n no es meramente una esperanza.</p>

<p>&iexcl;Es un hecho!</p>

<p>Cristo pag&oacute; el precio completo por todos sus pecados, de una vez y para siempre. Si usted es cristiano, todos sus pecados - pasados, presentes y futuros, han sido perdonados. No puede a&ntilde;adir nada a lo que Cristo ya ha hecho por usted. Las s&uacute;plicas, las l&aacute;grimas, los esfuerzos personales, o los rituales religiosos, no pueden reconciliarlo con Dios. Esto se hizo realidad en el momento en que usted confes&oacute; sus pecados y coloc&oacute; su fe en Cristo como su Salvador y Se&ntilde;or.</p>

<p>El cap&iacute;tulo 10 de la ep&iacute;stola a los Hebreos proclama:</p>

<div class="quote-right">En esa voluntad somos santificados mediante Ia ofrenda del cuerpo de Jesucristo hecha una vez para siempre. Porque con una sola ofrenda hizo perfectos para siempre a los santificados. Pues donde hay remisi&oacute;n de &eacute;stos, no hay m&aacute;s ofrenda por el pecado.</div>

<p>Para recibir el perd&oacute;n de Dios, sencillamente confiese sus pecados, y por fe acepte Su perd&oacute;n. Yo llamo a este proceso &ldquo;Respiraci&oacute;n Espiritual.&rdquo;</p>

<p>De la misma forma en que exhala e inhala f&iacute;sicamente, tambi&eacute;n debe respirar espiritualmente.</p>

<p>Usted exhala espiritualmente cuando confiesa sus pecados. La Biblia promete que si usted le confiesa a Dios sus pecados, &Eacute;l es fiel y justo para perdonar sus pecados y limpiarlo de toda maldad.</p>

<p>Confesar sus pecados significa ponerse de acuerdo con Dios sobre ellos. Esto incluye tres pasos.</p>

<p><strong>Primero</strong>, usted est&aacute; de acuerdo en que sus pecados son malos y desagradan a Dios. Dios es santo y no acepta el pecado. &Eacute;l lo ama a pesar de que en su vida haya pecados sin confesar. Sin embargo, para recibir Su perd&oacute;n usted debe considerar su pecado tan seriamente como Dios lo hace. Si no reconoce su pecado, no hay esperanza de salvaci&oacute;n para usted. En Proverbios 14:9 dice, &ldquo;Los necios se mofan del pecado.&rdquo; San Juan escribe, &ldquo;Si decimos que no tenemos pecado, nos enga&ntilde;amos a nosotros mismos, y la verdad no est&aacute; en nosotros. Si decimos que no hemos pecado,le hacemos a &Eacute;l mentiroso, y su Palabra no est&aacute; en nosotros.&rdquo;</p>

<p><strong>Segundo</strong>, usted reconoce que Dios ya ha perdonado sus pecados a trav&eacute;s de la muerte de Cristo y del derramamiento de su sangre en la cruz. La confesi&oacute;n, entonces, es una expresi&oacute;n de fe y un acto de obediencia que resulta en que Dios haga realidad, en tu experiencia, lo que ya ha hecho por ti a trav&eacute;s de la muerte de Su Hijo. Esta experiencia real y continua del perd&oacute;n de Dios, te ayuda a seguir siendo un canal abierto, a trav&eacute;s del cual pueden fluir el amor y el poder de Dios.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc2-5(1).png" style="float:right; width:50%" />El pecado que no se ha confesado interrumpe el fluir del poder de Dios en su vida. Perm&iacute;tame ilustrarlo. Un d&iacute;a, cuando estaba operando los controles del tren el&eacute;ctrico de mi hijo, de pronto &eacute;ste dej&oacute; de funcionar. No pod&iacute;a entender qu&eacute; era lo que estaba mal. Levant&eacute; el tren y lo coloqu&eacute; de nuevo sobre los rieles. Lo enchuf&eacute; y lo desenchuf&eacute;; no pas&oacute; nada. Luego descubr&iacute; que una peque&ntilde;a pieza de metal, una se&ntilde;al de &ldquo;no doblar a la izquierda&rdquo;, se hab&iacute;a ca&iacute;do sobre los rieles, interrumpiendo el paso de la energ&iacute;a el&eacute;ctrica.</p>

<p>Para disfrutar de una vida cristiana victoriosa y vivir como un cristiano espiritual, usted debe mantener &ldquo;cuentas cortas&rdquo; con Dios. Con esto me refiero a que debe confesar cualquier pecado que entra a su vida, en el mismo momento en que el Esp&iacute;ritu de Dios se lo revele. Si se reh&uacute;sa a confesar su pecado, usted se convierte en un cristiano carnal y camina en las tinieblas, en vez de caminar en la luz del amor y el perd&oacute;n de Dios.</p>

<p><strong>Tercero</strong>, usted se arrepiente, cambia de actitud, lo cual da como resultado un cambio de acciones y conducta. Por medio del poder del Esp&iacute;ritu Santo, usted se aparta de su pecado y cambia su conducta. En vez de ceder a la compulsi&oacute;n de lo que su naturaleza mundana y carnal quiere hacer, ahora hace lo que Dios quiere, en el poder del Esp&iacute;ritu Santo.</p>

<p>Con la confesi&oacute;n de sus pecados, o sea exhalando, comienza el proceso de la &ldquo;Respiraci&oacute;n Espiritual.&rdquo; Al inhalar, usted deja de ser un cristiano carnal y se vuelve un cristiano espiritual, apropi&aacute;ndose de la llenura y el poder del Esp&iacute;ritu Santo por fe. Muchas personas de hecho niegan la realidad del pecado en sus vidas. Otros intentan ignorar la mancha del pecado diciendo, &ldquo;No es tan malo.&rdquo; Algunos tratan de justificarse diciendo, &ldquo;No soy peor que otros.&rdquo; Muchos otros inventan sus propios m&eacute;todos para vencer el pecado en sus vidas, pero la &uacute;nica esperanza que una persona tiene para vencer al pecado es recibir la limpieza sobrenatural, la limpieza que s&oacute;lo Dios puede realizar a trav&eacute;s de Su Hijo, el Se&ntilde;or Jes&uacute;s, quien muri&oacute; y derram&oacute; su sangre por nuestros pecados.</p>

<p>El rey David conoc&iacute;a bastante bien al pecado. El Salmo 51 fue escrito despu&eacute;s que Nat&aacute;n el profeta, hab&iacute;a venido a informarle a David del juicio de Dios contra &eacute;l, por causa de su adulterio con Betsab&eacute; y del asesinato de Ur&iacute;as Heteo, el esposo de &eacute;sta. Sin embargo, David es descrito como un hombre conforme al coraz&oacute;n de Dios, porque se hab&iacute;a arrepentido. &ldquo;Ten piedad de m&iacute;, oh Dios, conforme a tu misericordia,&rdquo; escribi&oacute;. &ldquo;Conforme a la multitud de tus piedades borra mis rebeliones. L&aacute;vame m&aacute;s y m&aacute;s de mi maldad, y l&iacute;mpiame de mi pecado. Porque yo reconozco mis rebeliones, y mi pecado est&aacute; siempre delante de m&iacute;.&raquo;</p>

<p>En el Salmo 32, &eacute;l expresa el gozo que sinti&oacute; por el amor y el perd&oacute;n de Dios:</p>

<div class="quote-left">Bienaventurado aquel cuya transgresi&oacute;n ha sido perdonada, y cubierto su pecado. Bienaventurado el hombre a quien Jehov&aacute; no culpa de iniquidad, y en cuyo esp&iacute;ritu no hay enga&ntilde;o. Mientras call&eacute;, se envejecieron mis huesos, en mi gemir todo el d&iacute;a. Porque de d&iacute;a y de noche se agrav&oacute; sobre m&iacute; tu mano; se volvi&oacute; mi verdor en sequedades de verano. Mi pecado te declar&eacute;, y no encubr&iacute; mi iniquidad. Dije: confesar&eacute; mis transgresiones a Jehov&aacute;; y t&uacute; perdonaste la maldad de mi pecado.</div>

<p>David, desde las profundidades de su experiencia, comparte esta advertencia, que fluye de lo m&aacute;s &iacute;ntimo de su coraz&oacute;n: &ldquo;Por esto orar&aacute; a ti todo santo en el tiempo en que puedas ser hallado; ciertamente en la inundaci&oacute;n de muchas aguas no llegar&aacute;n &eacute;stas a &eacute;l.&rdquo;</p>

<p>Me siento preocupado por la multitud de cristianos que est&aacute;n recibiendo severas disciplinas de Dios, porque no confiesan sus pecados. Estas personas sufren reveses econ&oacute;micos, enfermedades f&iacute;sicas y atraviesan por todo tipo de dificultades, debido a que le son desobedientes y &Eacute;l est&aacute; tratando de llamar su atenci&oacute;n para bendecirlos y enriquecer sus vidas.</p>

<p>Le animo a hacer lo que yo mismo acostumbro hacer cuando experimento dificultades. Vuelvo al Se&ntilde;or y le pregunto, &ldquo;Se&ntilde;or, &iquest;hay alg&uacute;n pecado en mi vida que hace necesario que me disciplines?&rdquo; La Biblia dice que Dios disciplina a quienes ama.</p>

<p>Cuando usted experimente dificultades, es importante que se mire en el espejo de la Palabra de Dios y confiese cualquier pecado que &Eacute;l le revele.</p>

<p>El recibir la limpieza de Dios por los pecados que le obstaculizan, abre el camino para recibir la vida abundante y feliz a la que Jesucristo le ha llamado. Por fe, y con sencillez declare como verdad lo que Jesucristo ha dicho y hecho por usted.</p>

<p>Por fe, debe verse como Dios lo ve, como Su hijo, amado, perdonado y limpiado. Por fe, puede confesar sus pecados y arrepentirse, y por fe puede aceptar el perd&oacute;n y la limpieza de Dios.</p>

<p>Ahora, tal vez usted se pregunte, &ldquo;Si Cristo ya ha pagado el castigo por mis pecados, &iquest;por qu&eacute; debo confesarlos?&raquo;</p>

<p>Al confesar su pecado usted act&uacute;a en base a su fe en Dios y Su Palabra. La confesi&oacute;n no le da m&aacute;s perd&oacute;n. Cristo ya lo ha perdonado de una vez y para siempre, pero al admitir sus pecados, usted establece en su experiencia lo que Dios ha hecho por usted por medio de la muerte de Su Hijo.</p>

<p>Jes&uacute;s relat&oacute; una historia para que comprendi&eacute;ramos la confesi&oacute;n y el perd&oacute;n de Dios.</p>

<p>Ante la insistencia de su hijo menor, un padre le dio la parte de la herencia que le correspond&iacute;a. El hijo dej&oacute; el hogar y malgast&oacute; su herencia en fiestas y prostitutas. M&aacute;s tarde, el hijo volvi&oacute; al hogar hambriento y sintiendo que ya no era digno de ser considerado un hijo. Sin embargo, su padre corri&oacute; a su encuentro, lo abraz&oacute; y lo bes&oacute;, le coloc&oacute; un anillo en su dedo, le dio zapatos e hizo un banquete en su honor.</p>

<p>Por medio de esta par&aacute;bola, Jes&uacute;s ense&ntilde;&oacute; que Dios no lo ama &ldquo;cuando&rdquo;, &ldquo;si&rdquo;, o &ldquo;porque&rdquo; lo merezca, sino que lo ama a pesar de que sea desobediente y rebelde. Uno de los descubrimientos m&aacute;s conmovedores para m&iacute;, en el estudio de la Biblia, fue una declaraci&oacute;n que Jes&uacute;s hizo, en una oraci&oacute;n que se encuentra en San Juan 17:</p>

<div class="quote-right">La gloria que me diste, yo les he dado, para que sean uno, as&iacute; como nosotros somos uno. Yo en ellos, y t&uacute; en m&iacute;, para que sean perfectos en unidad, para que el mundo conozca que t&uacute; me enviaste, y que los has amado a ellos como tambi&eacute;n a m&iacute; me has amado.&nbsp;</div>

<p>&iexcl;Imag&iacute;nese! Dios lo ama tanto como ama a su &uacute;nico y amado Hijo, el Se&ntilde;or Jesucristo. Esta es la gran verdad. Cuando usted le confiesa a Dios sus pecados, por Su amor incondicional, &Eacute;l lo recibe nuevamente y lo perdona sin reparos. En vez de huir de &Eacute;l con temor, usted puede correr a sus amorosos brazos, confiando en que El lo perdonar&aacute;, pero si se niega a relacionarse honestamente con Dios, ignorando sus pecados, usted se volver&aacute; mundano y vivir&aacute; en las tinieblas en vez de caminar en la luz de Dios. Como en 1 Juan 1:6,7 dice:</p>

<div class="quote-left">Si decimos que tenemos&nbsp;comuni&oacute;n con &eacute;l, y andamos en tinieblas, mentimos, y no practicamos la verdad; pero si andamos en luz, como &eacute;l est&aacute; en luz, tenemos comuni&oacute;n unos con otros, y la sangre de Jesucristo &laquo; Su Hijo nos limpia de todo pecado.</div>

<p>Tal vez usted es consciente de los pecados que no le ha confesado a Dios. Como resultado, ha dejado su primer amor por &Eacute;l. Quiz&aacute;s tiene resentimiento hacia alguien. Su relaci&oacute;n con Cristo puede parecerle mec&aacute;nica y rutinaria Siente que sus oraciones no llegan a Dios. Lee su Biblia, pero no recuerda lo que ha le&iacute;do. A&uacute;n puede tratar de testificar de Cristo, pero nadie responde.</p>

<p>Un d&iacute;a yo me encontraba hablando con un amigo por medio de un tel&eacute;fono celular desde mi autom&oacute;vil. En cierto momento de nuestra conversaci&oacute;n, todo lo que yo pod&iacute;a o&iacute;r era una fuerte interferencia algo hab&iacute;a interrumpido la se&ntilde;al de radio y hab&iacute;a perdido buena parte de lo que mi amigo hab&iacute;a dicho. Despu&eacute;s que el autom&oacute;vil pas&oacute; de aquel obst&aacute;culo, una vez m&aacute;s pude escuchar su voz con claridad y pudimos continuar nuestra conversaci&oacute;n.</p>

<p>El pecado obstruye su comunicaci&oacute;n y su relaci&oacute;n con Dios. Cuando usted tolera el pecado en su vida, no puede o&iacute;r a Dios. Se siente desanimado y confundido. De pronto, se da cuenta que est&aacute; viviendo en base a lo que recuerda de Dios, en vez de vivir en una interacci&oacute;n din&aacute;mica con El.</p>

<p>Todo lo que debe hacer para experimentar el perd&oacute;n de Dios es confesar sus pecados. Exhale espiritualmente. Esa respiraci&oacute;n purificadora restaura su comuni&oacute;n con El.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary10" class="summary"><h2>+ UNA F&Oacute;RMULA ESPIRITUAL</h2></div>
<div class="collapsed" id ="Text10">
<!-- end default revealSummary -->

<p>Perm&iacute;tame compartirle un proceso simple, una f&oacute;rmula espiritual que ha ayudado a miles de personas a experimentar el amor y el perd&oacute;n de Dios.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary11" class="summary"><h3>+ 1. Haga una lista de sus pecados</h3></div>
<div class="collapsed" id ="Text11">
<!-- end default revealSummary -->

<p>Comience pidi&eacute;ndole al Esp&iacute;ritu Santo que le revele todo pecado que haya en su vida. Tome l&aacute;piz y papel y haga una lista de todos los pecados que &Eacute;l traiga a su mente. Mientras los escribe, confi&eacute;sale cada uno de ellos a Dios.</p>

<p>Le animo a humillarse delante de Dios mientras hace esto. D&eacute;le tiempo para que Dios le revele todo lo que le est&aacute; desagradando en su vida. Esta lista es s&oacute;lo entre usted y Dios, as&iacute; que sea completamente honesto. D&iacute;gale a Dios todo lo que est&eacute; mal.</p>

<p>Su lista podr&iacute;a incluir (S&oacute;lo por nombrar algunos):</p>

<ul>
	<li><span style="color:#d35400">Dejar su primer amor por Dios</span></li>
	<li><span style="color:#d35400">Dedicar poco o ning&uacute;n tiempo a la oraci&oacute;n y la lectura de la Palabra de Dios</span></li>
	<li><span style="color:#d35400">No testificar casi nunca de Cristo</span></li>
	<li><span style="color:#d35400">Falta de fe en Dios</span></li>
	<li><span style="color:#d35400">Tener una actitud celosa/envidiosa</span></li>
	<li><span style="color:#d35400">Codicia porlas cosas materiales</span></li>
	<li><span style="color:#d35400">Relacionarse con los dem&aacute;s con un esp&iacute;ritu de orgullo</span></li>
	<li><span style="color:#d35400">Actuar ego&iacute;stamente</span></li>
	<li><span style="color:#d35400">Falta de honradez, mentir</span></li>
	<li><span style="color:#d35400">Hablar de otros a sus espaldas</span></li>
	<li><span style="color:#d35400">Entretenerse con pensamientos inmorales</span></li>
	<li><span style="color:#d35400">Cometer pecados sexuales</span></li>
</ul>

<p>Cualquiera que sea su pecado, escr&iacute;balo y recuerde: usted tiene un Dios amoroso que lo perdona - que aun dio a Su mismo Hijo, el Se&ntilde;or Jesucristo, para morir por usted.</p>

<p>Una noche, despu&eacute;s de una conferencia, un joven me dijo, &ldquo;Yo no consideraba necesario hacer una lista. No pod&iacute;a pensar que hubiera algo malo en mi vida. Pero cuando vi a los dem&aacute;s haciendo sus listas, el Esp&iacute;ritu de Dios me gui&oacute; a hacer lo mismo.&rdquo;</p>

<p>Aunque no hab&iacute;a en su vida ning&uacute;n aspecto que reflejara gran desobediencia, dijo, una cantidad de peque&ntilde;as cosas hab&iacute;an mellado el filo cortante de su amor y testimonio por Cristo.</p>

<p>&Eacute;l me anim&oacute;, &ldquo;Si usted habla de nuevo sobre este tema, est&eacute; seguro de insistir en que todos hagan la lista de sus pecados, incluyendo a los que piensan que no hay &aacute;reas de grandes pecados en sus vidas. Si yo no hubiera hecho mi lista, me habr&iacute;a perdido una bendici&oacute;n muy especial de parte de Dios.&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary12" class="summary"><h3>+ 2. Escriba la promesa de Dios en forma diagonal sobre la lista</h3></div>
<div class="collapsed" id ="Text12">
<!-- end default revealSummary -->

<p>Despu&eacute;s de escribir su lista de pecados que Dios le ha revelado, escriba sobre la lista y en forma diagonal la promesa del perd&oacute;n de Dios, que se encuentra en 1 Juan 1:9:</p>

<div class="quote-left">Si confesamos nuestros pecados, &eacute;l es fiel y justo para &nbsp;perdonar nuestros pecados, y limpiarnos de toda maldad.</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary13" class="summary"><h3>+ 3. Destruya la lista</h3></div>
<div class="collapsed" id ="Text13">
<!-- end default revealSummary -->

<p>Cuando haya finalizado su tiempo de oraci&oacute;n y confesi&oacute;n, acepte el perd&oacute;n de Dios por fe, luego destruya la lista como una ilustraci&oacute;n del perd&oacute;n que Dios le ha otorgado. Puede romperla en peque&ntilde;os pedazos o quemarla para demostrar c&oacute;mo Dios le ha perdonado completamente.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary14" class="summary"><h3>+ 4. Restituya</h3></div>
<div class="collapsed" id ="Text14">
<!-- end default revealSummary -->

<p>El paso final en el proceso es preguntarle a Dios si debe hacer alguna restituci&oacute;n hacia alguien. Usted tal vez deba disculparse por tener una mala actitud hacia otros. Tal vez deba pedirle perd&oacute;n a alguna persona por la forma en que la ha tratado. Tal vez tenga que devolver algo que ha robado.</p>

<p>Es importante restituir, porque usted no puede mantener una conciencia limpia delante de Dios si todav&iacute;a tiene una conciencia culpable delante de las personas. La confesi&oacute;n a menudo incluye hacer restituci&oacute;n.</p>

<p>Al finalizar una reuni&oacute;n entre m&eacute;dicos cristianos en Arrowhead Springs, California donde hab&iacute;a hablado sobre este tema del perd&oacute;n, un doctor acept&oacute; el desaf&iacute;o de hacer su lista. Se ve&iacute;a muy emocionado cuando a la ma&ntilde;ana siguiente vino a verme muy temprano.</p>

<div class="block-quote">Nadie es perfecto, pero como cristianos no vivimos en condenaci&oacute;n. Al haber sido perdonado, usted es declarado justo delante de Dios en Jesucristo.<br />
<br />
Cuando haya completado este sencillo procedimiento, cualquier sentimiento de culpa que permanezca no proviene de Dios. Estos sentimientos provienen de Satan&aacute;s. Sus pecados han sido llevados tan lejos como est&aacute; el oriente del occidente. Est&aacute;n sepultados en lo profundo del mar. Dios los ha colocado detr&aacute;s de Sus espaldas y nunca m&aacute;s se acordar&aacute; de ellos.</div>

<address>&nbsp;</address>

<p>&ldquo;Ayer, cerca de medianoche&rdquo;, me dijo, &ldquo;un doctor amigo vino a mi habitaci&oacute;n y me dijo que &eacute;l me hab&iacute;a odiado por a&ntilde;os mientras pretend&iacute;a ser mi amigo. Cuando &eacute;l estaba haciendo su lista, Dios le dijo que deb&iacute;a venir, cont&aacute;rmelo y pedirme perd&oacute;n. Luego tuvimos un maravilloso tiempo de oraci&oacute;n. Dios nos bendijo en una manera muy especial.&rdquo;&nbsp;</p>

<p>&Eacute;l me anim&oacute; a continuar instando a los cristianos a que confiesen a Dios sus pecados y, si es necesario, que pidan perd&oacute;n a aquellos a quienes hayan hecho alg&uacute;n mal, seg&uacute;n el Esp&iacute;ritu Santo los gu&iacute;e.</p>

<p>&iquest;Est&aacute; usted llevando cargas pesadas de culpabilidad? &iquest;Se pregunta usted si alguna vez podr&aacute; experimentar el amor y el perd&oacute;n de Dios que otros cristianos disfrutan con tanto gozo?</p>

<p>Tal vez usted se siente como el hombre que estaba junto a la carretera con una carga pesada en sus espaldas. Muy pronto se detuvo una camioneta y el conductor se ofreci&oacute; a llevarlo. El cansado viajero acept&oacute; alegremente. Pero cuando subi&oacute; a la camioneta, &eacute;l continu&oacute; cargando sobre sus espaldas aquella pesada carga.</p>

<p>&ldquo;&iquest;Por qu&eacute; no baja su paquete y descansa?&rdquo;, le pregunt&oacute; el conductor.</p>

<p>El viajero desanimado respondi&oacute;, &ldquo;&iexcl;No puedo hacer eso! Ser&iacute;a demasiado pedirle que adem&aacute;s de llevarme a m&iacute;, lleve mi carga.&rdquo;</p>

<p>&ldquo;&iexcl;Qu&eacute; hombre m&aacute;s tonto!&rdquo;, dir&aacute; usted. Esa no ser&iacute;a nuestra respuesta a tal ofrecimiento, &iquest;no es cierto? Sin embargo, muchos cristianos contin&uacute;an llevando pesadas cargas de culpa, aun despu&eacute;s de que han confiado sus vidas al Se&ntilde;or Jes&uacute;s y despu&eacute;s que han recibido Su perd&oacute;n.</p>

<p>Frecuentemente, experimentamos hostilidad o rechazo de parte de nuestros amigos o de nuestra familia, cuando no cumplimos con sus expectativas. Si usted realmente ha da&ntilde;ado a otra persona, el confesar y restituir cuando sea posible, lo liberar&aacute; de la culpa. Los sentimientos de culpa permanecer&aacute;n, si usted no se perdona a s&iacute; mismo o si s&oacute;lo trata de vivir de acuerdo a las expectativas irreales de los dem&aacute;s.</p>

<p>Nadie es perfecto, pero como cristianos no vivimos en condenaci&oacute;n. Al haber sido perdonado, usted es declarado justo delante de Dios en Jesucristo.</p>

<p>Cuando haya completado este sencillo procedimiento, cualquier sentimiento de culpa que permanezca no proviene de Dios. Estos sentimientos provienen de Satan&aacute;s. Sus pecados han sido llevados tan lejos como est&aacute; el oriente del occidente. Est&aacute;n sepultados en lo profundo del mar. Dios los ha colocado detr&aacute;s de Sus espaldas y nunca m&aacute;s se acordar&aacute; de ellos.</p>

<p>Hab&iacute;a un ni&ntilde;o que ten&iacute;a como mascota a un pajarito. Un d&iacute;a el pajarito muri&oacute;. El ni&ntilde;o estaba muy triste, y sus padres decidieron que en vez de permitir que su hijo siguiera deprimido, ellos har&iacute;an que la ocasi&oacute;n fuera un episodio para recordar.</p>

<p>Le dijeron, &ldquo;hagamos un funeral.&rdquo; Llamaron a todos los ni&ntilde;os del vecindario, cavaron un peque&ntilde;o hoyo en la tierra, colocaron el pajarito en una caja, y lo sepultaron con una ceremonia. En vez de estar deprimido, el ni&ntilde;o estaba emocionado.</p>

<p>Al d&iacute;a siguiente, fue y desenterr&oacute; el pajarito para ver como estaba. Su padre, sin embargo, insisti&oacute; en que lo sepultara de nuevo. As&iacute; que lo hizo. Unos d&iacute;as despu&eacute;s, el ni&ntilde;o volvi&oacute; y desenterr&oacute; al pajarito de nuevo. Esto se repiti&oacute; en varias oportunidades y cada vez el padre lo reprend&iacute;a. Finalmente, el padre se enoj&oacute; y le dijo, &ldquo;&iexcl;Mira, deja ese pajarito en la tierra y nunca m&aacute;s lo desentierres!.&rdquo; As&iacute; que lo hizo.</p>

<p>&iquest;Est&aacute; usted s&oacute;lo confesando sus pecados una y otra vez, sin un sentido de perd&oacute;n, como el peque&ntilde;o ni&ntilde;o desenterraba aquel pajarito muerto?</p>

<p>Todos sus pecados han sido perdonados por Dios en base a la muerte de Cristo en la cruz y del derramamiento de Su sangre por sus pecados. Siempre que Satan&aacute;s lo acuse de alg&uacute;n acto del pasado por el que haya contristado u ofendido al Esp&iacute;ritu Santo, usted puede decir con gran gozo, &ldquo;He confesado ese pecado y s&eacute; que Dios me ha perdonado y me ha limpiado tal como lo prometi&oacute;.&rdquo; Luego, deje que ese pecado quede sepultado en Su perd&oacute;n.</p>

<p>Lo desaf&iacute;o a examinar su vida ahora mismo. &iquest;Est&aacute; usted experimentando la plenitud de la vida cristiana? &iquest;Est&aacute; llevando una carga de culpa por pecados pasados en su vida? Yo le insto a comenzar el proceso de la Respiraci&oacute;n Espiritual hoy mismo. Esto ha ayudado a millones de cristianos, y estoy seguro que tambi&eacute;n le ayudar&aacute; a usted.</p>

<div class="block-quote">El perd&oacute;n de Dios es completo. Agradezca a Dios por borrar su culpa y por limpiarlo. Declare victoria sobre esos pensamientos negativos y en fe, convi&eacute;rtase en un disc&iacute;pulo y en un testigo fruct&iacute;fero de nuestro Se&ntilde;or.<br />
<br />
Usted es ahora libre para experimentar la vida abundante que &Eacute;l le prometi&oacute;. Ahora puede animar y servir a sus hermanos y hermanas en Cristo, y ahora puede entrar en los campos de la cosecha espiritual, para gozarse trayendo a otras personas al Se&ntilde;or Jes&uacute;s, quien ha hecho tanto por usted.</div>

</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', '¿CÓMO  PUEDE USTED  EXPERIMENTAR  EL AMOR Y  PERDÓN DE  DIOS?: ', '/content/M2/spa/tc/tc02.html')">
				<img class="social" src="@/assets/sites/mc2/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
<!-- end sdcard languageFooterSingle -->

</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->
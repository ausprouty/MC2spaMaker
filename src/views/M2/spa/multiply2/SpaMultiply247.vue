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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>47.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo de servicio</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 12: Opening Doors-->
<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Alabar</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back"><em>Lee un pasaje de las Escrituras y practiquen un canto de adoraci&oacute;n.</em></p>

<ul>
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>)</li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
<!-- end bible --></div>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s.</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunte: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tus declaraciones: Yo har&eacute;&hellip; cu&aacute;ndo&hellip;?&quot;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y est&iacute;mulo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al:</p>

<ul>
	<li class="back">Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final, o</li>
	<li class="back">reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo, o</li>
	<li class="back">record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos.</li>
</ul>

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada ciudad y comunidad, y el Evangelio para cada persona&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 13:1-38</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 13</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s les lava los pies a sus disc&iacute;pulos</h3>

<p><sup class="versenum">1 </sup>Se acercaba la fiesta de la Pascua. Jes&uacute;s sab&iacute;a que le hab&iacute;a llegado la hora de abandonar este mundo para volver al Padre. Y habiendo amado a los suyos que estaban en el mundo, los am&oacute; hasta el fin.</p>

<p><sup class="versenum">2&nbsp;</sup>Lleg&oacute; la hora de la cena. El diablo ya hab&iacute;a incitado a Judas Iscariote, hijo de Sim&oacute;n, para que traicionara a Jes&uacute;s.<sup class="versenum">3&nbsp;</sup>Sab&iacute;a Jes&uacute;s que el Padre hab&iacute;a puesto todas las cosas bajo su dominio, y que hab&iacute;a salido de Dios y a &eacute;l volv&iacute;a;<sup class="versenum">4&nbsp;</sup>as&iacute; que se levant&oacute; de la mesa, se quit&oacute; el manto y se at&oacute; una toalla a la cintura.<sup class="versenum">5&nbsp;</sup>Luego ech&oacute; agua en un recipiente y comenz&oacute; a lavarles los pies a sus disc&iacute;pulos y a sec&aacute;rselos con la toalla que llevaba a la cintura.</p>

<p><sup class="versenum">6&nbsp;</sup>Cuando lleg&oacute; a Sim&oacute;n Pedro, este le dijo:</p>

<p>&mdash;&iquest;Y t&uacute;, Se&ntilde;or, me vas a lavar los pies a m&iacute;?</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;Ahora no entiendes lo que estoy haciendo &mdash;le respondi&oacute; Jes&uacute;s&mdash;, pero lo entender&aacute;s m&aacute;s tarde.</p>

<p><sup class="versenum">8&nbsp;</sup>&mdash;&iexcl;No! &mdash;protest&oacute; Pedro&mdash;. &iexcl;Jam&aacute;s me lavar&aacute;s los pies!</p>

<p>&mdash;Si no te los lavo, no tendr&aacute;s parte conmigo.</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;Entonces, Se&ntilde;or, &iexcl;no solo los pies, sino tambi&eacute;n las manos y la cabeza!</p>

<p><sup class="versenum">10&nbsp;</sup>&mdash;El que ya se ha ba&ntilde;ado no necesita lavarse m&aacute;s que los pies &mdash;le contest&oacute; Jes&uacute;s&mdash;; pues ya todo su cuerpo est&aacute; limpio. Y ustedes ya est&aacute;n limpios, aunque no todos.</p>

<p><sup class="versenum">11&nbsp;</sup>Jes&uacute;s sab&iacute;a qui&eacute;n lo iba a traicionar, y por eso dijo que no todos estaban limpios.</p>

<p><sup class="versenum">12&nbsp;</sup>Cuando termin&oacute; de lavarles los pies, se puso el manto y volvi&oacute; a su lugar. Entonces les dijo:</p>

<p>&mdash;&iquest;Entienden lo que he hecho con ustedes?<sup class="versenum">13&nbsp;</sup>Ustedes me llaman Maestro y Se&ntilde;or, y dicen bien, porque lo soy.<sup class="versenum">14&nbsp;</sup>Pues, si yo, el Se&ntilde;or y el Maestro, les he lavado los pies, tambi&eacute;n ustedes deben lavarse los pies los unos a los otros.<sup class="versenum">15&nbsp;</sup>Les he puesto el ejemplo, para que hagan lo mismo que yo he hecho con ustedes.<sup class="versenum">16&nbsp;</sup>Ciertamente les aseguro que ning&uacute;n siervo es m&aacute;s que su amo, y ning&uacute;n mensajero es m&aacute;s que el que lo envi&oacute;.<sup class="versenum">17&nbsp;</sup>&iquest;Entienden esto? Dichosos ser&aacute;n si lo ponen en pr&aacute;ctica.</p>

<h3>Jes&uacute;s predice la traici&oacute;n de Judas</h3>

<p><sup class="versenum">18&nbsp;</sup>&raquo;No me refiero a todos ustedes; yo s&eacute; a qui&eacute;nes he escogido. Pero esto es para que se cumpla la Escritura: &ldquo;El que comparte el pan conmigo me ha puesto la zancadilla&rdquo;.</p>

<p><sup class="versenum">19&nbsp;</sup>&raquo;Les digo esto ahora, antes de que suceda, para que cuando suceda crean que yo soy.<sup class="versenum">20&nbsp;</sup>Ciertamente les aseguro que el que recibe al que yo env&iacute;o me recibe a m&iacute;, y el que me recibe a m&iacute; recibe al que me envi&oacute;&raquo;.</p>

<p><sup class="versenum">21&nbsp;</sup>Dicho esto, Jes&uacute;s se angusti&oacute; profundamente y declar&oacute;:</p>

<p>&mdash;Ciertamente les aseguro que uno de ustedes me va a traicionar.</p>

<p><sup class="versenum">22&nbsp;</sup>Los disc&iacute;pulos se miraban unos a otros sin saber a cu&aacute;l de ellos se refer&iacute;a.<sup class="versenum">23&nbsp;</sup>Uno de ellos, el disc&iacute;pulo a quien Jes&uacute;s amaba, estaba a su lado.<sup class="versenum">24&nbsp;</sup>Sim&oacute;n Pedro le hizo se&ntilde;as a ese disc&iacute;pulo y le dijo:</p>

<p>&mdash;Preg&uacute;ntale a qui&eacute;n se refiere.</p>

<p><sup class="versenum">25&nbsp;</sup>&mdash;Se&ntilde;or, &iquest;qui&eacute;n es? &mdash;pregunt&oacute; &eacute;l, reclin&aacute;ndose sobre Jes&uacute;s.</p>

<p><sup class="versenum">26&nbsp;</sup>&mdash;Aquel a quien yo le d&eacute; este pedazo de pan que voy a mojar en el plato &mdash;le contest&oacute; Jes&uacute;s.</p>

<p>Acto seguido, moj&oacute; el pedazo de pan y se lo dio a Judas Iscariote, hijo de Sim&oacute;n.<sup class="versenum">27&nbsp;</sup>Tan pronto como Judas tom&oacute; el pan, Satan&aacute;s entr&oacute; en &eacute;l.</p>

<p>&mdash;Lo que vas a hacer, hazlo pronto &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">28&nbsp;</sup>Ninguno de los que estaban a la mesa entendi&oacute; por qu&eacute; le dijo eso Jes&uacute;s.<sup class="versenum">29&nbsp;</sup>Como Judas era el encargado del dinero, algunos pensaron que Jes&uacute;s le estaba diciendo que comprara lo necesario para la fiesta, o que diera algo a los pobres.<sup class="versenum">30&nbsp;</sup>En cuanto Judas tom&oacute; el pan, sali&oacute; de all&iacute;. Ya era de noche.</p>

<h3>Jes&uacute;s predice la negaci&oacute;n de Pedro</h3>

<p><sup class="versenum">31&nbsp;</sup>Cuando Judas hubo salido, Jes&uacute;s dijo:</p>

<p>&mdash;Ahora es glorificado el Hijo del hombre, y Dios es glorificado en &eacute;l.<sup class="versenum">32&nbsp;</sup>Si Dios es glorificado en &eacute;l, Dios glorificar&aacute; al Hijo en s&iacute; mismo, y lo har&aacute; muy pronto.</p>

<p><sup class="versenum">33&nbsp;</sup>&raquo;Mis queridos hijos, poco tiempo me queda para estar con ustedes. Me buscar&aacute;n, y lo que antes les dije a los jud&iacute;os, ahora se lo digo a ustedes: Adonde yo voy, ustedes no pueden ir.</p>

<p><sup class="versenum">34&nbsp;</sup>&raquo;Este mandamiento nuevo les doy: que se amen los unos a los otros. As&iacute; como yo los he amado, tambi&eacute;n ustedes deben amarse los unos a los otros.<sup class="versenum">35&nbsp;</sup>De este modo todos sabr&aacute;n que son mis disc&iacute;pulos, si se aman los unos a los otros&raquo;.</p>

<p><sup class="versenum">36&nbsp;</sup>&mdash;&iquest;Y a d&oacute;nde vas, Se&ntilde;or? &mdash;pregunt&oacute; Sim&oacute;n Pedro.</p>

<p>&mdash;Adonde yo voy, no puedes seguirme ahora, pero me seguir&aacute;s m&aacute;s tarde.</p>

<p><sup class="versenum">37&nbsp;</sup>&mdash;Se&ntilde;or &mdash;insisti&oacute; Pedro&mdash;, &iquest;por qu&eacute; no puedo seguirte ahora? Por ti dar&eacute; hasta la vida.</p>

<p><sup class="versenum">38&nbsp;</sup>&mdash;&iquest;T&uacute; dar&aacute;s la vida por m&iacute;? &iexcl;De veras te aseguro que antes de que cante el gallo, me negar&aacute;s tres veces!</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/247.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 13:1-38&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discusi&oacute;n de descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;Por qu&eacute;?</li>
	<li>&iquest;Hay algo nuevo o algo que ha desarrollado hasta este punto de la historia de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de la humanidad o divinidad de Jes&uacute;s en este pasaje?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p><em>Preguntas adicionales que puede utilizar:</em></p>

<ul>
	<li>&iquest;Qu&eacute; est&aacute;n aprendiendo sus seguidores?</li>
	<li>&iquest;Qu&eacute; es lo que Jes&uacute;s nos est&aacute; modelando acerca de la vida, el ministerio o el liderazgo piadoso?</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="up">Leer, contar y corregir</h2>

<ul class="up">
	<li>Lea la historia de nuevo. P&iacute;dale a alguien que cuente la historia y p&iacute;dale al grupo que corrija si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Resumen</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="up">Jes&uacute;s pasa la &uacute;ltima semana de Su vida ense&ntilde;ando en el templo durante el d&iacute;a y orando en el Monte de los Olivos por la noche. En la &uacute;ltima noche con Sus disc&iacute;pulos, &Eacute;l ense&ntilde;a mucho acerca del liderazgo. &Eacute;l &quot;muestra toda la extensi&oacute;n de Su amor&quot;. Jes&uacute;s sorprende a sus disc&iacute;pulos tomando el papel de un siervo del hogar, lavando los pies de los doce. &iexcl;Ninguno de ellos lo hab&iacute;a hecho! Jes&uacute;s les dijo que deb&iacute;an seguir Su ejemplo para ser humildes, sirviendo unos a otros haciendo lo que sea necesario. En la mayor&iacute;a de las culturas, el liderazgo de servicio es visto como d&eacute;bil, pero as&iacute; es como funciona el liderazgo en el Reino de Dios. Mientras Jes&uacute;s estaba compartiendo la &uacute;ltima cena con su equipo central m&aacute;s cercano de doce, &eacute;l estaba afligido sabiendo que uno de ellos lo traicionar&iacute;a. Judas se hab&iacute;a desilusionado con el liderazgo de Jes&uacute;s y ya hab&iacute;a llegado a un acuerdo para ayudar a los l&iacute;deres religiosos a arrestar a Jes&uacute;s en un lugar tranquilo lejos de las multitudes. Judas se abri&oacute; a s&iacute; mismo para ser manipulado por Satan&aacute;s. En medio de la traici&oacute;n y el dolor, Jes&uacute;s ordena a los disc&iacute;pulos que deben amarse unos a otros.</p>

<ul>
	<li class="nobreak-final-final">Para mayor estudio: <span class="popup-link" @click = "popUp('pop3')"> Lucas 22:7-38</span>;&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>Cuando lleg&oacute; el d&iacute;a de la fiesta de los Panes sin levadura, en que deb&iacute;a sacrificarse el cordero de la Pascua,<sup class="versenum">8&nbsp;</sup>Jes&uacute;s envi&oacute; a Pedro y a Juan, dici&eacute;ndoles:</p>

	<p>&mdash;Vayan a hacer los preparativos para que comamos la Pascua.</p>

	<p><sup class="versenum">9&nbsp;</sup>&mdash;&iquest;D&oacute;nde quieres que la preparemos? &mdash;le preguntaron.</p>

	<p><sup class="versenum">10&nbsp;</sup>&mdash;Miren &mdash;contest&oacute; &eacute;l&mdash;: al entrar ustedes en la ciudad les saldr&aacute; al encuentro un hombre que lleva un c&aacute;ntaro de agua. S&iacute;ganlo hasta la casa en que entre,<sup class="versenum">11&nbsp;</sup>y d&iacute;ganle al due&ntilde;o de la casa: &ldquo;El Maestro pregunta: &iquest;D&oacute;nde est&aacute; la sala en la que voy a comer la Pascua con mis disc&iacute;pulos?&rdquo;<sup class="versenum">12&nbsp;</sup>&Eacute;l les mostrar&aacute; en la planta alta una sala amplia y amueblada. Preparen all&iacute; la cena.</p>

	<p><sup class="versenum">13&nbsp;</sup>Ellos se fueron y encontraron todo tal como les hab&iacute;a dicho Jes&uacute;s. As&iacute; que prepararon la Pascua.</p>

	<p><sup class="versenum">14&nbsp;</sup>Cuando lleg&oacute; la hora, Jes&uacute;s y sus ap&oacute;stoles se sentaron a la mesa.<sup class="versenum">15&nbsp;</sup>Entonces les dijo:</p>

	<p>&mdash;He tenido much&iacute;simos deseos de comer esta Pascua con ustedes antes de padecer,<sup class="versenum">16&nbsp;</sup>pues les digo que no volver&eacute; a comerla hasta que tenga su pleno cumplimiento en el reino de Dios.</p>

	<p><sup class="versenum">17&nbsp;</sup>Luego tom&oacute; la copa, dio gracias y dijo:</p>

	<p>&mdash;Tomen esto y rep&aacute;rtanlo entre ustedes.<sup class="versenum">18&nbsp;</sup>Les digo que no volver&eacute; a beber del fruto de la vid hasta que venga el reino de Dios.</p>

	<p><sup class="versenum">19&nbsp;</sup>Tambi&eacute;n tom&oacute; pan y, despu&eacute;s de dar gracias, lo parti&oacute;, se lo dio a ellos y dijo:</p>

	<p>&mdash;Este pan es mi cuerpo, entregado por ustedes; hagan esto en memoria de m&iacute;.</p>

	<p><sup class="versenum">20&nbsp;</sup>De la misma manera tom&oacute; la copa despu&eacute;s de la cena, y dijo:</p>

	<p>&mdash;Esta copa es el nuevo pacto en mi sangre, que es derramada por ustedes.<sup class="versenum">21&nbsp;</sup>Pero sepan que la mano del que va a traicionarme est&aacute; con la m&iacute;a, sobre la mesa.<sup class="versenum">22&nbsp;</sup>A la verdad el Hijo del hombre se ir&aacute; seg&uacute;n est&aacute; decretado, pero &iexcl;ay de aquel que lo traiciona!</p>

	<p><sup class="versenum">23&nbsp;</sup>Entonces comenzaron a preguntarse unos a otros qui&eacute;n de ellos har&iacute;a esto.</p>

	<p><sup class="versenum">24&nbsp;</sup>Tuvieron adem&aacute;s un altercado sobre cu&aacute;l de ellos ser&iacute;a el m&aacute;s importante.<sup class="versenum">25&nbsp;</sup>Jes&uacute;s les dijo:</p>

	<p>&mdash;Los reyes de las naciones oprimen a sus s&uacute;bditos, y los que ejercen autoridad sobre ellos se llaman a s&iacute; mismos benefactores.<sup class="versenum">26&nbsp;</sup>No sea as&iacute; entre ustedes. Al contrario, el mayor debe comportarse como el menor, y el que manda como el que sirve.<sup class="versenum">27&nbsp;</sup>Porque, &iquest;qui&eacute;n es m&aacute;s importante, el que est&aacute; a la mesa o el que sirve? &iquest;No lo es el que est&aacute; sentado a la mesa? Sin embargo, yo estoy entre ustedes como uno que sirve.<sup class="versenum">28&nbsp;</sup>Ahora bien, ustedes son los que han estado siempre a mi lado en mis pruebas.<sup class="versenum">29&nbsp;</sup>Por eso, yo mismo les concedo un reino, as&iacute; como mi Padre me lo concedi&oacute; a m&iacute;,<sup class="versenum">30&nbsp;</sup>para que coman y beban a mi mesa en mi reino, y se sienten en tronos para juzgar a las doce tribus de Israel.</p>

	<p><sup class="versenum">31&nbsp;</sup>&raquo;Sim&oacute;n, Sim&oacute;n, mira que Satan&aacute;s ha pedido zarandearlos a ustedes como si fueran trigo.<sup class="versenum">32&nbsp;</sup>Pero yo he orado por ti, para que no falle tu fe. Y t&uacute;, cuando te hayas vuelto a m&iacute;, fortalece a tus hermanos&raquo;.</p>

	<p><sup class="versenum">33&nbsp;</sup>&mdash;Se&ntilde;or &mdash;respondi&oacute; Pedro&mdash;, estoy dispuesto a ir contigo tanto a la c&aacute;rcel como a la muerte.</p>

	<p><sup class="versenum">34&nbsp;</sup>&mdash;Pedro, te digo que hoy mismo, antes de que cante el gallo, tres veces negar&aacute;s que me conoces.</p>

	<p><sup class="versenum">35&nbsp;</sup>Luego Jes&uacute;s dijo a todos:</p>

	<p>&mdash;Cuando los envi&eacute; a ustedes sin monedero ni bolsa ni sandalias, &iquest;acaso les falt&oacute; algo?</p>

	<p>&mdash;Nada &mdash;respondieron.</p>

	<p><sup class="versenum">36&nbsp;</sup>&mdash;Ahora, en cambio, el que tenga un monedero, que lo lleve; as&iacute; mismo, el que tenga una bolsa. Y el que nada tenga, que venda su manto y compre una espada.<sup class="versenum">37&nbsp;</sup>Porque les digo que tiene que cumplirse en m&iacute; aquello que est&aacute; escrito: &ldquo;Y fue contado entre los transgresores&rdquo;. En efecto, lo que se ha escrito de m&iacute; se est&aacute; cumpliendo.</p>

	<p><sup class="versenum">38&nbsp;</sup>&mdash;Mira, Se&ntilde;or &mdash;le se&ntilde;alaron los disc&iacute;pulos&mdash;, aqu&iacute; hay dos espadas.</p>

	<p>&mdash;&iexcl;Basta! &mdash;les contest&oacute;.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Mateo 26:17-29</span>;&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>El primer d&iacute;a de la fiesta de los Panes sin levadura, se acercaron los disc&iacute;pulos a Jes&uacute;s y le preguntaron:</p>

	<p>&mdash;&iquest;D&oacute;nde quieres que hagamos los preparativos para que comas la Pascua?</p>

	<p><sup class="versenum">18&nbsp;</sup>&Eacute;l les respondi&oacute; que fueran a la ciudad, a la casa de cierto hombre, y le dijeran: &laquo;El Maestro dice: &ldquo;Mi tiempo est&aacute; cerca. Voy a celebrar la Pascua en tu casa con mis disc&iacute;pulos&rdquo;&raquo;.<sup class="versenum">19&nbsp;</sup>Los disc&iacute;pulos hicieron entonces como Jes&uacute;s les hab&iacute;a mandado, y prepararon la Pascua.</p>

	<p><sup class="versenum">20&nbsp;</sup>Al anochecer, Jes&uacute;s estaba sentado a la mesa con los doce.<sup class="versenum">21&nbsp;</sup>Mientras com&iacute;an, les dijo:</p>

	<p>&mdash;Les aseguro que uno de ustedes me va a traicionar.</p>

	<p><sup class="versenum">22&nbsp;</sup>Ellos se entristecieron mucho, y uno por uno comenzaron a preguntarle:</p>

	<p>&mdash;&iquest;Acaso ser&eacute; yo, Se&ntilde;or?</p>

	<p><sup class="versenum">23&nbsp;</sup>&mdash;El que mete la mano conmigo en el plato es el que me va a traicionar &mdash;respondi&oacute; Jes&uacute;s&mdash;.<sup class="versenum">24&nbsp;</sup>A la verdad el Hijo del hombre se ir&aacute;, tal como est&aacute; escrito de &eacute;l, pero &iexcl;ay de aquel que lo traiciona! M&aacute;s le valdr&iacute;a a ese hombre no haber nacido.</p>

	<p><sup class="versenum">25&nbsp;</sup>&mdash;&iquest;Acaso ser&eacute; yo, Rab&iacute;? &mdash;le dijo Judas, el que lo iba a traicionar.</p>

	<p>&mdash;T&uacute; lo has dicho &mdash;le contest&oacute; Jes&uacute;s.</p>

	<p><sup class="versenum">26&nbsp;</sup>Mientras com&iacute;an, Jes&uacute;s tom&oacute; pan y lo bendijo. Luego lo parti&oacute; y se lo dio a sus disc&iacute;pulos, dici&eacute;ndoles:</p>

	<p>&mdash;Tomen y coman; esto es mi cuerpo.</p>

	<p><sup class="versenum">27&nbsp;</sup>Despu&eacute;s tom&oacute; la copa, dio gracias, y se la ofreci&oacute; dici&eacute;ndoles:</p>

	<p>&mdash;Beban de ella todos ustedes.<sup class="versenum">28&nbsp;</sup>Esto es mi sangre del pacto, que es derramada por muchos para el perd&oacute;n de pecados.<sup class="versenum">29&nbsp;</sup>Les digo que no beber&eacute; de este fruto de la vid desde ahora en adelante, hasta el d&iacute;a en que beba con ustedes el vino nuevo en el reino de mi Padre.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Marcos 14:12-25</span>.

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>El primer d&iacute;a de la fiesta de los Panes sin levadura, cuando se acostumbraba sacrificar el cordero de la Pascua, los disc&iacute;pulos le preguntaron a Jes&uacute;s:</p>

	<p>&mdash;&iquest;D&oacute;nde quieres que vayamos a hacer los preparativos para que comas la Pascua?</p>

	<p><sup class="versenum">13&nbsp;</sup>&Eacute;l envi&oacute; a dos de sus disc&iacute;pulos con este encargo:</p>

	<p>&mdash;Vayan a la ciudad y les saldr&aacute; al encuentro un hombre que lleva un c&aacute;ntaro de agua. S&iacute;ganlo,<sup class="versenum">14&nbsp;</sup>y all&iacute; donde entre d&iacute;ganle al due&ntilde;o: &ldquo;El Maestro pregunta: &iquest;D&oacute;nde est&aacute; la sala en la que pueda comer la Pascua con mis disc&iacute;pulos?&rdquo;<sup class="versenum">15&nbsp;</sup>&Eacute;l les mostrar&aacute; en la planta alta una sala amplia, amueblada y arreglada. Preparen all&iacute; nuestra cena.</p>

	<p><sup class="versenum">16&nbsp;</sup>Los disc&iacute;pulos salieron, entraron en la ciudad y encontraron todo tal y como les hab&iacute;a dicho Jes&uacute;s. As&iacute; que prepararon la Pascua.</p>

	<p><sup class="versenum">17&nbsp;</sup>Al anochecer lleg&oacute; Jes&uacute;s con los doce.<sup class="versenum">18&nbsp;</sup>Mientras estaban sentados a la mesa comiendo, dijo:</p>

	<p>&mdash;Les aseguro que uno de ustedes, que est&aacute; comiendo conmigo, me va a traicionar.</p>

	<p><sup class="versenum">19&nbsp;</sup>Ellos se pusieron tristes, y uno tras otro empezaron a preguntarle:</p>

	<p>&mdash;&iquest;Acaso ser&eacute; yo?</p>

	<p><sup class="versenum">20&nbsp;</sup>&mdash;Es uno de los doce &mdash;contest&oacute;&mdash;, uno que moja el pan conmigo en el plato.<sup class="versenum">21&nbsp;</sup>A la verdad, el Hijo del hombre se ir&aacute; tal como est&aacute; escrito de &eacute;l, pero &iexcl;ay de aquel que lo traiciona! M&aacute;s le valdr&iacute;a a ese hombre no haber nacido.</p>

	<p><sup class="versenum">22&nbsp;</sup>Mientras com&iacute;an, Jes&uacute;s tom&oacute; pan y lo bendijo. Luego lo parti&oacute; y se lo dio a ellos, dici&eacute;ndoles:</p>

	<p>&mdash;Tomen; esto es mi cuerpo.</p>

	<p><sup class="versenum">23&nbsp;</sup>Despu&eacute;s tom&oacute; una copa, dio gracias y se la dio a ellos, y todos bebieron de ella.</p>

	<p><sup class="versenum">24&nbsp;</sup>&mdash;Esto es mi sangre del pacto, que es derramada por muchos &mdash;les dijo&mdash;.<sup class="versenum">25&nbsp;</sup>Les aseguro que no volver&eacute; a beber del fruto de la vid hasta aquel d&iacute;a en que beba el vino nuevo en el reino de Dios.</p>
	<!-- end bible --></div>
</li>
</ul>
</div>

<p><em>Practique la entrega y la comuni&oacute;n aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="up">Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:</p>

<ul class="forward">
	<li class="up">Orar, Cuidar, Compartir</li>
	<li class="up">Compartir el Evangelio</li>
	<li class="up">Estudios B&iacute;blicos Fundacionales</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba sus declaraciones de &ldquo;Yo har&eacute;&hellip;para cuando&hellip;&rdquo; y comp&aacute;rtala en su peque&ntilde;o grupo.</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">Orando por la Misi&oacute;n</h2>

<ul class="forward">
	<li>Comprometa las metas de todos con el Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y &uacute;sanos para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Liderazgo de servicio: ', '/content/M2/spa/multiply2/multiply247.html')">
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
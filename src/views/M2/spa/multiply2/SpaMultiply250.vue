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
                        <div class="chapter_number ltr"><h1>50.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo de resurrección</h1></div>
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
	<div>
	<p><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	</div>
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
	<li class="back">Lea o vea <strong>Juan 19:31-20:31</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 19:31-37</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">31&nbsp;</sup>Era el d&iacute;a de la preparaci&oacute;n para la Pascua. Los jud&iacute;os no quer&iacute;an que los cuerpos permanecieran en la cruz en s&aacute;bado, por ser este un d&iacute;a muy solemne. As&iacute; que le pidieron a Pilato ordenar que les quebraran las piernas a los crucificados y bajaran sus cuerpos.<sup class="versenum">32&nbsp;</sup>Fueron entonces los soldados y le quebraron las piernas al primer hombre que hab&iacute;a sido crucificado con Jes&uacute;s, y luego al otro.<sup class="versenum">33&nbsp;</sup>Pero, cuando se acercaron a Jes&uacute;s y vieron que ya estaba muerto, no le quebraron las piernas,<sup class="versenum">34&nbsp;</sup>sino que uno de los soldados le abri&oacute; el costado con una lanza, y al instante le brot&oacute; sangre y agua.<sup class="versenum">35&nbsp;</sup>El que lo vio ha dado testimonio de ello, y su testimonio es ver&iacute;dico. &Eacute;l sabe que dice la verdad, para que tambi&eacute;n ustedes crean.<sup class="versenum">36&nbsp;</sup>Estas cosas sucedieron para que se cumpliera la Escritura: &laquo;No le quebrar&aacute;n ning&uacute;n hueso&raquo;<sup class="versenum">37&nbsp;</sup>y, como dice otra Escritura: &laquo;Mirar&aacute;n al que han traspasado&raquo;.</p>

<h3>Sepultura de Jes&uacute;s</h3>

<p><sup class="versenum">38&nbsp;</sup>Despu&eacute;s de esto, Jos&eacute; de Arimatea le pidi&oacute; a Pilato el cuerpo de Jes&uacute;s. Jos&eacute; era disc&iacute;pulo de Jes&uacute;s, aunque en secreto por miedo a los jud&iacute;os. Con el permiso de Pilato, fue y retir&oacute; el cuerpo.<sup class="versenum">39&nbsp;</sup>Tambi&eacute;n Nicodemo, el que antes hab&iacute;a visitado a Jes&uacute;s de noche, lleg&oacute; con unos treinta y cuatro kilos de una mezcla de mirra y &aacute;loe.<sup class="versenum">40&nbsp;</sup>Ambos tomaron el cuerpo de Jes&uacute;s y, conforme a la costumbre jud&iacute;a de dar sepultura, lo envolvieron en vendas con las especias arom&aacute;ticas.<sup class="versenum">41&nbsp;</sup>En el lugar donde crucificaron a Jes&uacute;s hab&iacute;a un huerto, y en el huerto un sepulcro nuevo en el que todav&iacute;a no se hab&iacute;a sepultado a nadie.<sup class="versenum">42&nbsp;</sup>Como era el d&iacute;a jud&iacute;o de la preparaci&oacute;n, y el sepulcro estaba cerca, pusieron all&iacute; a Jes&uacute;s.</p>

<h3>El sepulcro vac&iacute;o</h3>

<p><sup class="versenum">1 </sup>El primer d&iacute;a de la semana, muy de ma&ntilde;ana, cuando todav&iacute;a estaba oscuro, Mar&iacute;a Magdalena fue al sepulcro y vio que hab&iacute;an quitado la piedra que cubr&iacute;a la entrada.<sup class="versenum">2&nbsp;</sup>As&iacute; que fue corriendo a ver a Sim&oacute;n Pedro y al otro disc&iacute;pulo, a quien Jes&uacute;s amaba, y les dijo:</p>

<p>&mdash;&iexcl;Se han llevado del sepulcro al Se&ntilde;or, y no sabemos d&oacute;nde lo han puesto!</p>

<p><sup class="versenum">3&nbsp;</sup>Pedro y el otro disc&iacute;pulo se dirigieron entonces al sepulcro.<sup class="versenum">4&nbsp;</sup>Ambos fueron corriendo, pero, como el otro disc&iacute;pulo corr&iacute;a m&aacute;s aprisa que Pedro, lleg&oacute; primero al sepulcro.<sup class="versenum">5&nbsp;</sup>Inclin&aacute;ndose, se asom&oacute; y vio all&iacute; las vendas, pero no entr&oacute;.<sup class="versenum">6&nbsp;</sup>Tras &eacute;l lleg&oacute; Sim&oacute;n Pedro, y entr&oacute; en el sepulcro. Vio all&iacute; las vendas<sup class="versenum">7&nbsp;</sup>y el sudario que hab&iacute;a cubierto la cabeza de Jes&uacute;s, aunque el sudario no estaba con las vendas, sino enrollado en un lugar aparte.<sup class="versenum">8&nbsp;</sup>En ese momento entr&oacute; tambi&eacute;n el otro disc&iacute;pulo, el que hab&iacute;a llegado primero al sepulcro; y vio y crey&oacute;.<sup class="versenum">9&nbsp;</sup>Hasta entonces no hab&iacute;an entendido la Escritura, que dice que Jes&uacute;s ten&iacute;a que resucitar.</p>

<h3>Jes&uacute;s se aparece a Mar&iacute;a Magdalena</h3>

<p><sup class="versenum">10&nbsp;</sup>Los disc&iacute;pulos regresaron a su casa,<sup class="versenum">11&nbsp;</sup>pero Mar&iacute;a se qued&oacute; afuera, llorando junto al sepulcro. Mientras lloraba, se inclin&oacute; para mirar dentro del sepulcro,<sup class="versenum">12&nbsp;</sup>y vio a dos &aacute;ngeles vestidos de blanco, sentados donde hab&iacute;a estado el cuerpo de Jes&uacute;s, uno a la cabecera y otro a los pies.</p>

<p><sup class="versenum">13&nbsp;</sup>&mdash;&iquest;Por qu&eacute; lloras, mujer? &mdash;le preguntaron los &aacute;ngeles.</p>

<p>&mdash;Es que se han llevado a mi Se&ntilde;or, y no s&eacute; d&oacute;nde lo han puesto &mdash;les respondi&oacute;.</p>

<p><sup class="versenum">14&nbsp;</sup>Apenas dijo esto, volvi&oacute; la mirada y all&iacute; vio a Jes&uacute;s de pie, aunque no sab&iacute;a que era &eacute;l.<sup class="versenum">15&nbsp;</sup>Jes&uacute;s le dijo:</p>

<p>&mdash;&iquest;Por qu&eacute; lloras, mujer? &iquest;A qui&eacute;n buscas?</p>

<p>Ella, pensando que se trataba del que cuidaba el huerto, le dijo:</p>

<p>&mdash;Se&ntilde;or, si usted se lo ha llevado, d&iacute;game d&oacute;nde lo ha puesto, y yo ir&eacute; por &eacute;l.</p>

<p><sup class="versenum">16&nbsp;</sup>&mdash;Mar&iacute;a &mdash;le dijo Jes&uacute;s.</p>

<p>Ella se volvi&oacute; y exclam&oacute;:</p>

<p>&mdash;&iexcl;Raboni! (que en arameo significa: Maestro).</p>

<p><sup class="versenum">17&nbsp;</sup>&mdash;Su&eacute;ltame, porque todav&iacute;a no he vuelto al Padre. Ve m&aacute;s bien a mis hermanos y diles: &ldquo;Vuelvo a mi Padre, que es Padre de ustedes; a mi Dios, que es Dios de ustedes&rdquo;.</p>

<p><sup class="versenum">18&nbsp;</sup>Mar&iacute;a Magdalena fue a darles la noticia a los disc&iacute;pulos. &laquo;&iexcl;He visto al Se&ntilde;or!&raquo;, exclamaba, y les contaba lo que &eacute;l le hab&iacute;a dicho.</p>

<h3>Jes&uacute;s se aparece a sus disc&iacute;pulos</h3>

<p><sup class="versenum">19&nbsp;</sup>Al atardecer de aquel primer d&iacute;a de la semana, estando reunidos los disc&iacute;pulos a puerta cerrada por temor a los jud&iacute;os, entr&oacute; Jes&uacute;s y, poni&eacute;ndose en medio de ellos, los salud&oacute;.</p>

<p>&mdash;&iexcl;La paz sea con ustedes!</p>

<p><sup class="versenum">20&nbsp;</sup>Dicho esto, les mostr&oacute; las manos y el costado. Al ver al Se&ntilde;or, los disc&iacute;pulos se alegraron.</p>

<p><sup class="versenum">21&nbsp;</sup>&mdash;&iexcl;La paz sea con ustedes! &mdash;repiti&oacute; Jes&uacute;s&mdash;. Como el Padre me envi&oacute; a m&iacute;, as&iacute; yo los env&iacute;o a ustedes.</p>

<p><sup class="versenum">22&nbsp;</sup>Acto seguido, sopl&oacute; sobre ellos y les dijo:</p>

<p>&mdash;Reciban el Esp&iacute;ritu Santo.<sup class="versenum">23&nbsp;</sup>A quienes les perdonen sus pecados, les ser&aacute;n perdonados; a quienes no se los perdonen, no les ser&aacute;n perdonados.</p>

<h3>Jes&uacute;s se aparece a Tom&aacute;s</h3>

<p><sup class="versenum">24&nbsp;</sup>Tom&aacute;s, al que apodaban el Gemelo, y que era uno de los doce, no estaba con los disc&iacute;pulos cuando lleg&oacute; Jes&uacute;s.<sup class="versenum">25&nbsp;</sup>As&iacute; que los otros disc&iacute;pulos le dijeron:</p>

<p>&mdash;&iexcl;Hemos visto al Se&ntilde;or!</p>

<p>&mdash;Mientras no vea yo la marca de los clavos en sus manos, y meta mi dedo en las marcas y mi mano en su costado, no lo creer&eacute; &mdash;repuso Tom&aacute;s.</p>

<p><sup class="versenum">26&nbsp;</sup>Una semana m&aacute;s tarde estaban los disc&iacute;pulos de nuevo en la casa, y Tom&aacute;s estaba con ellos. Aunque las puertas estaban cerradas, Jes&uacute;s entr&oacute; y, poni&eacute;ndose en medio de ellos, los salud&oacute;.</p>

<p>&mdash;&iexcl;La paz sea con ustedes!</p>

<p><sup class="versenum">27&nbsp;</sup>Luego le dijo a Tom&aacute;s:</p>

<p>&mdash;Pon tu dedo aqu&iacute; y mira mis manos. Acerca tu mano y m&eacute;tela en mi costado. Y no seas incr&eacute;dulo, sino hombre de fe.</p>

<p><sup class="versenum">28&nbsp;</sup>&mdash;&iexcl;Se&ntilde;or m&iacute;o y Dios m&iacute;o! &mdash;exclam&oacute; Tom&aacute;s.</p>

<p><sup class="versenum">29&nbsp;</sup>&mdash;Porque me has visto, has cre&iacute;do &mdash;le dijo Jes&uacute;s&mdash;; dichosos los que no han visto y sin embargo creen.</p>

<p><sup class="versenum">30&nbsp;</sup>Jes&uacute;s hizo muchas otras se&ntilde;ales milagrosas en presencia de sus disc&iacute;pulos, las cuales no est&aacute;n registradas en este libro.<sup class="versenum">31&nbsp;</sup>Pero estas se han escrito para que ustedes crean que Jes&uacute;s es el Cristo, el Hijo de Dios, y para que al creer en su nombre tengan vida.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/250.mp4" type="button" class="external-movie">
         Mira Juan 19:31-37</button>
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

<ul>
	<li class="nobreak-final-final">&iexcl;&Eacute;l ha resucitado de entre los muertos! La Biblia dice que la resurrecci&oacute;n de Jes&uacute;s lo cambia todo. &quot;Ahora, si morimos con Cristo, creemos que tambi&eacute;n viviremos con &eacute;l. Porque sabemos que desde que Cristo resucit&oacute; de entre los muertos, no puede morir de nuevo; la muerte ya no tiene dominio sobre &eacute;l, venci&oacute; a la muerte, muri&oacute; al pecado de una vez por todas; pero la vida que vive la vive para Dios. De la misma manera, cons&iacute;stete muerto al pecado, pero vivo a Dios en Cristo Jes&uacute;s.&quot; (<span class="popup-link" @click = "popUp('pop3')"> Romanos 6:8- 11</span>).

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>Ahora bien, si hemos muerto con Cristo, confiamos que tambi&eacute;n viviremos con &eacute;l.<sup class="versenum">9&nbsp;</sup>Pues sabemos que Cristo, por haber sido levantado de entre los muertos, ya no puede volver a morir; la muerte ya no tiene dominio sobre &eacute;l.<sup class="versenum">10&nbsp;</sup>En cuanto a su muerte, muri&oacute; al pecado una vez y para siempre; en cuanto a su vida, vive para Dios.</p>

	<p><sup class="versenum">11&nbsp;</sup>De la misma manera, tambi&eacute;n ustedes consid&eacute;rense muertos al pecado, pero vivos para Dios en Cristo Jes&uacute;s.</p>
	<!-- end bible --></div>
	El poder de vivir la vida est&aacute; en el poder de la victoria de Jes&uacute;s sobre la muerte. La resurrecci&oacute;n de Jes&uacute;s nos da poder para derrotar el pecado en nuestras vidas. El poder de Jes&uacute;s y Su resurrecci&oacute;n fluye a trav&eacute;s de nosotros a medida que dejamos de lado nuestra voluntad y permitimos que Jes&uacute;s viva en y a trav&eacute;s de nosotros. El liderazgo de resurrecci&oacute;n es el liderazgo que est&aacute; permitiendo que Jes&uacute;s viva en y a trav&eacute;s de nosotros. Liderar como Jes&uacute;s es radicalmente diferente al liderazgo del mundo que busca promoverse a s&iacute; mismo y controlar a los dem&aacute;s.</li>
</ul>

<ul>
	<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop4')"> Lucas 23:50-24:49</span>;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>Sepultura de Jes&uacute;s</h3>

	<p><sup class="versenum">50&nbsp;</sup>Hab&iacute;a un hombre bueno y justo llamado Jos&eacute;, miembro del Consejo,<sup class="versenum">51&nbsp;</sup>que no hab&iacute;a estado de acuerdo con la decisi&oacute;n ni con la conducta de ellos. Era natural de un pueblo de Judea llamado Arimatea, y esperaba el reino de Dios.<sup class="versenum">52&nbsp;</sup>Este se present&oacute; ante Pilato y le pidi&oacute; el cuerpo de Jes&uacute;s.<sup class="versenum">53&nbsp;</sup>Despu&eacute;s de bajarlo, lo envolvi&oacute; en una s&aacute;bana de lino y lo puso en un sepulcro cavado en la roca, en el que todav&iacute;a no se hab&iacute;a sepultado a nadie.<sup class="versenum">54&nbsp;</sup>Era el d&iacute;a de preparaci&oacute;n para el s&aacute;bado, que estaba a punto de comenzar.</p>

	<p><sup class="versenum">55&nbsp;</sup>Las mujeres que hab&iacute;an acompa&ntilde;ado a Jes&uacute;s desde Galilea siguieron a Jos&eacute; para ver el sepulcro y c&oacute;mo colocaban el cuerpo.<sup class="versenum">56&nbsp;</sup>Luego volvieron a casa y prepararon especias arom&aacute;ticas y perfumes. Entonces descansaron el s&aacute;bado, conforme al mandamiento.</p>

	<h3>La resurrecci&oacute;n</h3>

	<p><sup class="versenum">1 </sup>El primer d&iacute;a de la semana, muy de ma&ntilde;ana, las mujeres fueron al sepulcro, llevando las especias arom&aacute;ticas que hab&iacute;an preparado.<sup class="versenum">2&nbsp;</sup>Encontraron que hab&iacute;a sido quitada la piedra que cubr&iacute;a el sepulcro<sup class="versenum">3&nbsp;</sup>y, al entrar, no hallaron el cuerpo del Se&ntilde;or Jes&uacute;s.<sup class="versenum">4&nbsp;</sup>Mientras se preguntaban qu&eacute; habr&iacute;a pasado, se les presentaron dos hombres con ropas resplandecientes.<sup class="versenum">5&nbsp;</sup>Asustadas, se postraron sobre su rostro, pero ellos les dijeron:</p>

	<p>&mdash;&iquest;Por qu&eacute; buscan ustedes entre los muertos al que vive?<sup class="versenum">6&nbsp;</sup>No est&aacute; aqu&iacute;; &iexcl;ha resucitado! Recuerden lo que les dijo cuando todav&iacute;a estaba con ustedes en Galilea:<sup class="versenum">7&nbsp;</sup>&ldquo;El Hijo del hombre tiene que ser entregado en manos de hombres pecadores, y ser crucificado, pero al tercer d&iacute;a resucitar&aacute;&rdquo;.</p>

	<p><sup class="versenum">8&nbsp;</sup>Entonces ellas se acordaron de las palabras de Jes&uacute;s.<sup class="versenum">9&nbsp;</sup>Al regresar del sepulcro, les contaron todas estas cosas a los once y a todos los dem&aacute;s.<sup class="versenum">10&nbsp;</sup>Las mujeres eran Mar&iacute;a Magdalena, Juana, Mar&iacute;a la madre de Jacobo, y las dem&aacute;s que las acompa&ntilde;aban.<sup class="versenum">11&nbsp;</sup>Pero a los disc&iacute;pulos el relato les pareci&oacute; una tonter&iacute;a, as&iacute; que no les creyeron.<sup class="versenum">12&nbsp;</sup>Pedro, sin embargo, sali&oacute; corriendo al sepulcro. Se asom&oacute; y vio solo las vendas de lino. Luego volvi&oacute; a su casa, extra&ntilde;ado de lo que hab&iacute;a sucedido.</p>

	<h3>De camino a Ema&uacute;s</h3>

	<p><sup class="versenum">13&nbsp;</sup>Aquel mismo d&iacute;a dos de ellos se dirig&iacute;an a un pueblo llamado Ema&uacute;s, a unos once kil&oacute;metros de Jerusal&eacute;n.<sup class="versenum">14&nbsp;</sup>Iban conversando sobre todo lo que hab&iacute;a acontecido.<sup class="versenum">15&nbsp;</sup>Sucedi&oacute; que, mientras hablaban y discut&iacute;an, Jes&uacute;s mismo se acerc&oacute; y comenz&oacute; a caminar con ellos;<sup class="versenum">16&nbsp;</sup>pero no lo reconocieron, pues sus ojos estaban velados.</p>

	<p><sup class="versenum">17&nbsp;</sup>&mdash;&iquest;Qu&eacute; vienen discutiendo por el camino? &mdash;les pregunt&oacute;.</p>

	<p>Se detuvieron, cabizbajos;<sup class="versenum">18&nbsp;</sup>y uno de ellos, llamado Cleofas, le dijo:</p>

	<p>&mdash;&iquest;Eres t&uacute; el &uacute;nico peregrino en Jerusal&eacute;n que no se ha enterado de todo lo que ha pasado recientemente?</p>

	<p><sup class="versenum">19&nbsp;</sup>&mdash;&iquest;Qu&eacute; es lo que ha pasado? &mdash;les pregunt&oacute;.</p>

	<p>&mdash;Lo de Jes&uacute;s de Nazaret. Era un profeta, poderoso en obras y en palabras delante de Dios y de todo el pueblo.<sup class="versenum">20&nbsp;</sup>Los jefes de los sacerdotes y nuestros gobernantes lo entregaron para ser condenado a muerte, y lo crucificaron;<sup class="versenum">21&nbsp;</sup>pero nosotros abrig&aacute;bamos la esperanza de que era &eacute;l quien redimir&iacute;a a Israel. Es m&aacute;s, ya hace tres d&iacute;as que sucedi&oacute; todo esto.<sup class="versenum">22&nbsp;</sup>Tambi&eacute;n algunas mujeres de nuestro grupo nos dejaron asombrados. Esta ma&ntilde;ana, muy temprano, fueron al sepulcro,<sup class="versenum">23&nbsp;</sup>pero no hallaron su cuerpo. Cuando volvieron, nos contaron que se les hab&iacute;an aparecido unos &aacute;ngeles quienes les dijeron que &eacute;l est&aacute; vivo.<sup class="versenum">24&nbsp;</sup>Algunos de nuestros compa&ntilde;eros fueron despu&eacute;s al sepulcro y lo encontraron tal como hab&iacute;an dicho las mujeres, pero a &eacute;l no lo vieron.</p>

	<p><sup class="versenum">25&nbsp;</sup>&mdash;&iexcl;Qu&eacute; torpes son ustedes &mdash;les dijo&mdash;, y qu&eacute; tardos de coraz&oacute;n para creer todo lo que han dicho los profetas!<sup class="versenum">26&nbsp;</sup>&iquest;Acaso no ten&iacute;a que sufrir el Cristo estas cosas antes de entrar en su gloria?</p>

	<p><sup class="versenum">27&nbsp;</sup>Entonces, comenzando por Mois&eacute;s y por todos los profetas, les explic&oacute; lo que se refer&iacute;a a &eacute;l en todas las Escrituras.</p>

	<p><sup class="versenum">28&nbsp;</sup>Al acercarse al pueblo adonde se dirig&iacute;an, Jes&uacute;s hizo como que iba m&aacute;s lejos.<sup class="versenum">29&nbsp;</sup>Pero ellos insistieron:</p>

	<p>&mdash;Qu&eacute;date con nosotros, que est&aacute; atardeciendo; ya es casi de noche.</p>

	<p>As&iacute; que entr&oacute; para quedarse con ellos.<sup class="versenum">30&nbsp;</sup>Luego, estando con ellos a la mesa, tom&oacute; el pan, lo bendijo, lo parti&oacute; y se lo dio.<sup class="versenum">31&nbsp;</sup>Entonces se les abrieron los ojos y lo reconocieron, pero &eacute;l desapareci&oacute;.<sup class="versenum">32&nbsp;</sup>Se dec&iacute;an el uno al otro:</p>

	<p>&mdash;&iquest;No ard&iacute;a nuestro coraz&oacute;n mientras conversaba con nosotros en el camino y nos explicaba las Escrituras?</p>

	<p><sup class="versenum">33&nbsp;</sup>Al instante se pusieron en camino y regresaron a Jerusal&eacute;n. All&iacute; encontraron a los once y a los que estaban reunidos con ellos.<sup class="versenum">34&nbsp;</sup>&laquo;&iexcl;Es cierto! &mdash;dec&iacute;an&mdash;. El Se&ntilde;or ha resucitado y se le ha aparecido a Sim&oacute;n&raquo;.</p>

	<p><sup class="versenum">35&nbsp;</sup>Los dos, por su parte, contaron lo que les hab&iacute;a sucedido en el camino, y c&oacute;mo hab&iacute;an reconocido a Jes&uacute;s cuando parti&oacute; el pan.</p>

	<p><sup class="versenum">36&nbsp;</sup>Todav&iacute;a estaban ellos hablando acerca de esto, cuando Jes&uacute;s mismo se puso en medio de ellos y les dijo:</p>

	<p>&mdash;Paz a ustedes.</p>

	<p><sup class="versenum">37&nbsp;</sup>Aterrorizados, creyeron que ve&iacute;an a un esp&iacute;ritu.</p>

	<p><sup class="versenum">38&nbsp;</sup>&mdash;&iquest;Por qu&eacute; se asustan tanto? &mdash;les pregunt&oacute;&mdash;. &iquest;Por qu&eacute; les vienen dudas?<sup class="versenum">39&nbsp;</sup>Miren mis manos y mis pies. &iexcl;Soy yo mismo! T&oacute;quenme y vean; un esp&iacute;ritu no tiene carne ni huesos, como ven que los tengo yo.</p>

	<p><sup class="versenum">40&nbsp;</sup>Dicho esto, les mostr&oacute; las manos y los pies.<sup class="versenum">41&nbsp;</sup>Como ellos no acababan de creerlo a causa de la alegr&iacute;a y del asombro, les pregunt&oacute;:</p>

	<p>&mdash;&iquest;Tienen aqu&iacute; algo de comer?</p>

	<p><sup class="versenum">42&nbsp;</sup>Le dieron un pedazo de pescado asado,<sup class="versenum">43&nbsp;</sup>as&iacute; que lo tom&oacute; y se lo comi&oacute; delante de ellos. Luego les dijo:</p>

	<p><sup class="versenum">44&nbsp;</sup>&mdash;Cuando todav&iacute;a estaba yo con ustedes, les dec&iacute;a que ten&iacute;a que cumplirse todo lo que est&aacute; escrito acerca de m&iacute; en la ley de Mois&eacute;s, en los profetas y en los salmos.</p>

	<p><sup class="versenum">45&nbsp;</sup>Entonces les abri&oacute; el entendimiento para que comprendieran las Escrituras.</p>

	<p><sup class="versenum">46&nbsp;</sup>&mdash;Esto es lo que est&aacute; escrito &mdash;les explic&oacute;&mdash;: que el Cristo padecer&aacute; y resucitar&aacute; al tercer d&iacute;a,<sup class="versenum">47&nbsp;</sup>y en su nombre se predicar&aacute;n el arrepentimiento y el perd&oacute;n de pecados a todas las naciones, comenzando por Jerusal&eacute;n.<sup class="versenum">48&nbsp;</sup>Ustedes son testigos de estas cosas.<sup class="versenum">49&nbsp;</sup>Ahora voy a enviarles lo que ha prometido mi Padre; pero ustedes qu&eacute;dense en la ciudad hasta que sean revestidos del poder de lo alto.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Mateo 27:57-28:15</span>;&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<h3>Sepultura de Jes&uacute;s</h3>

	<p><sup class="versenum">57&nbsp;</sup>Al atardecer, lleg&oacute; un hombre rico de Arimatea, llamado Jos&eacute;, que tambi&eacute;n se hab&iacute;a convertido en disc&iacute;pulo de Jes&uacute;s.<sup class="versenum">58&nbsp;</sup>Se present&oacute; ante Pilato para pedirle el cuerpo de Jes&uacute;s, y Pilato orden&oacute; que se lo dieran.<sup class="versenum">59&nbsp;</sup>Jos&eacute; tom&oacute; el cuerpo, lo envolvi&oacute; en una s&aacute;bana limpia<sup class="versenum">60&nbsp;</sup>y lo puso en un sepulcro nuevo de su propiedad que hab&iacute;a cavado en la roca. Luego hizo rodar una piedra grande a la entrada del sepulcro, y se fue.<sup class="versenum">61&nbsp;</sup>All&iacute; estaban, sentadas frente al sepulcro, Mar&iacute;a Magdalena y la otra Mar&iacute;a.</p>

	<h3>La guardia ante el sepulcro</h3>

	<p><sup class="versenum">62&nbsp;</sup>Al d&iacute;a siguiente, despu&eacute;s del d&iacute;a de la preparaci&oacute;n, los jefes de los sacerdotes y los fariseos se presentaron ante Pilato.</p>

	<p><sup class="versenum">63&nbsp;</sup>&mdash;Se&ntilde;or &mdash;le dijeron&mdash;, nosotros recordamos que mientras ese enga&ntilde;ador a&uacute;n viv&iacute;a, dijo: &ldquo;A los tres d&iacute;as resucitar&eacute;&rdquo;.<sup class="versenum">64&nbsp;</sup>Por eso, ordene usted que se selle el sepulcro hasta el tercer d&iacute;a, no sea que vengan sus disc&iacute;pulos, se roben el cuerpo y le digan al pueblo que ha resucitado. Ese &uacute;ltimo enga&ntilde;o ser&iacute;a peor que el primero.</p>

	<p><sup class="versenum">65&nbsp;</sup>&mdash;Ll&eacute;vense una guardia de soldados &mdash;les orden&oacute; Pilato&mdash;, y vayan a asegurar el sepulcro lo mejor que puedan.</p>

	<p><sup class="versenum">66&nbsp;</sup>As&iacute; que ellos fueron, cerraron el sepulcro con una piedra, y lo sellaron; y dejaron puesta la guardia.</p>

	<h3>La resurrecci&oacute;n</h3>

	<p><sup class="versenum">1 </sup>Despu&eacute;s del s&aacute;bado, al amanecer del primer d&iacute;a de la semana, Mar&iacute;a Magdalena y la otra Mar&iacute;a fueron a ver el sepulcro.</p>

	<p><sup class="versenum">2&nbsp;</sup>Sucedi&oacute; que hubo un terremoto violento, porque un &aacute;ngel del Se&ntilde;or baj&oacute; del cielo y, acerc&aacute;ndose al sepulcro, quit&oacute; la piedra y se sent&oacute; sobre ella.<sup class="versenum">3&nbsp;</sup>Su aspecto era como el de un rel&aacute;mpago, y su ropa era blanca como la nieve.<sup class="versenum">4&nbsp;</sup>Los guardias tuvieron tanto miedo de &eacute;l que se pusieron a temblar y quedaron como muertos.</p>

	<p><sup class="versenum">5&nbsp;</sup>El &aacute;ngel dijo a las mujeres:</p>

	<p>&mdash;No tengan miedo; s&eacute; que ustedes buscan a Jes&uacute;s, el que fue crucificado.<sup class="versenum">6&nbsp;</sup>No est&aacute; aqu&iacute;, pues ha resucitado, tal como dijo. Vengan a ver el lugar donde lo pusieron.<sup class="versenum">7&nbsp;</sup>Luego vayan pronto a decirles a sus disc&iacute;pulos: &ldquo;&Eacute;l se ha levantado de entre los muertos y va delante de ustedes a Galilea. All&iacute; lo ver&aacute;n&rdquo;. Ahora ya lo saben.</p>

	<p><sup class="versenum">8&nbsp;</sup>As&iacute; que las mujeres se alejaron a toda prisa del sepulcro, asustadas pero muy alegres, y corrieron a dar la noticia a los disc&iacute;pulos.<sup class="versenum">9&nbsp;</sup>En eso Jes&uacute;s les sali&oacute; al encuentro y las salud&oacute;. Ellas se le acercaron, le abrazaron los pies y lo adoraron.</p>

	<p><sup class="versenum">10&nbsp;</sup>&mdash;No tengan miedo &mdash;les dijo Jes&uacute;s&mdash;. Vayan a decirles a mis hermanos que se dirijan a Galilea, y all&iacute; me ver&aacute;n.</p>

	<p><sup class="versenum">11&nbsp;</sup>Mientras las mujeres iban de camino, algunos de los guardias entraron en la ciudad e informaron a los jefes de los sacerdotes de todo lo que hab&iacute;a sucedido.<sup class="versenum">12&nbsp;</sup>Despu&eacute;s de reunirse estos jefes con los ancianos y de trazar un plan, les dieron a los soldados una fuerte suma de dinero<sup class="versenum">13&nbsp;</sup>y les encargaron: &laquo;Digan que los disc&iacute;pulos de Jes&uacute;s vinieron por la noche y que, mientras ustedes dorm&iacute;an, se robaron el cuerpo.<sup class="versenum">14&nbsp;</sup>Y, si el gobernador llega a enterarse de esto, nosotros responderemos por ustedes y les evitaremos cualquier problema&raquo;.</p>

	<p><sup class="versenum">15&nbsp;</sup>As&iacute; que los soldados tomaron el dinero e hicieron como se les hab&iacute;a instruido. Esta es la versi&oacute;n de los sucesos que hasta el d&iacute;a de hoy ha circulado entre los jud&iacute;os.</p>
	</div>
	<!--end of crossrefs--></div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop6')"> Marcos 15:42- 16:18</span>.

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<h3>Sepultura de Jes&uacute;s</h3>

	<p><sup class="versenum">42&nbsp;</sup>Era el d&iacute;a de preparaci&oacute;n (es decir, la v&iacute;spera del s&aacute;bado). As&iacute; que al atardecer,<sup class="versenum">43&nbsp;</sup>Jos&eacute; de Arimatea, miembro distinguido del Consejo, y que tambi&eacute;n esperaba el reino de Dios, se atrevi&oacute; a presentarse ante Pilato para pedirle el cuerpo de Jes&uacute;s.<sup class="versenum">44&nbsp;</sup>Pilato, sorprendido de que ya hubiera muerto, llam&oacute; al centuri&oacute;n y le pregunt&oacute; si hac&iacute;a mucho que hab&iacute;a muerto.<sup class="versenum">45&nbsp;</sup>Una vez informado por el centuri&oacute;n, le entreg&oacute; el cuerpo a Jos&eacute;.<sup class="versenum">46&nbsp;</sup>Entonces Jos&eacute; baj&oacute; el cuerpo, lo envolvi&oacute; en una s&aacute;bana que hab&iacute;a comprado, y lo puso en un sepulcro cavado en la roca. Luego hizo rodar una piedra a la entrada del sepulcro.<sup class="versenum">47&nbsp;</sup>Mar&iacute;a Magdalena y Mar&iacute;a la madre de Jos&eacute; vieron d&oacute;nde lo pusieron.</p>

	<h3>La resurrecci&oacute;n</h3>

	<p><sup class="versenum">1 </sup>Cuando pas&oacute; el s&aacute;bado, Mar&iacute;a Magdalena, Mar&iacute;a la madre de Jacobo, y Salom&eacute; compraron especias arom&aacute;ticas para ir a ungir el cuerpo de Jes&uacute;s.<sup class="versenum">2&nbsp;</sup>Muy de ma&ntilde;ana el primer d&iacute;a de la semana, apenas salido el sol, se dirigieron al sepulcro.<sup class="versenum">3&nbsp;</sup>Iban dici&eacute;ndose unas a otras: &laquo;&iquest;Qui&eacute;n nos quitar&aacute; la piedra de la entrada del sepulcro?&raquo;<sup class="versenum">4&nbsp;</sup>Pues la piedra era muy grande.</p>

	<p>Pero, al fijarse bien, se dieron cuenta de que estaba corrida.<sup class="versenum">5&nbsp;</sup>Al entrar en el sepulcro vieron a un joven vestido con un manto blanco, sentado a la derecha, y se asustaron.</p>

	<p><sup class="versenum">6&nbsp;</sup>&mdash;No se asusten &mdash;les dijo&mdash;. Ustedes buscan a Jes&uacute;s el nazareno, el que fue crucificado. &iexcl;Ha resucitado! No est&aacute; aqu&iacute;. Miren el lugar donde lo pusieron.<sup class="versenum">7&nbsp;</sup>Pero vayan a decirles a los disc&iacute;pulos y a Pedro: &ldquo;&Eacute;l va delante de ustedes a Galilea. All&iacute; lo ver&aacute;n, tal como les dijo&rdquo;.</p>

	<p><sup class="versenum">8&nbsp;</sup>Temblorosas y desconcertadas, las mujeres salieron huyendo del sepulcro. No dijeron nada a nadie, porque ten&iacute;an miedo.</p>

	<p><sup class="versenum">9&nbsp;</sup>Cuando Jes&uacute;s resucit&oacute; en la madrugada del primer d&iacute;a de la semana, se apareci&oacute; primero a Mar&iacute;a Magdalena, de la que hab&iacute;a expulsado siete demonios.<sup class="versenum">10&nbsp;</sup>Ella fue y avis&oacute; a los que hab&iacute;an estado con &eacute;l, que estaban lament&aacute;ndose y llorando.<sup class="versenum">11&nbsp;</sup>Pero ellos, al o&iacute;r que Jes&uacute;s estaba vivo y que ella lo hab&iacute;a visto, no lo creyeron.</p>

	<p><sup class="versenum">12&nbsp;</sup>Despu&eacute;s se apareci&oacute; Jes&uacute;s en otra forma a dos de ellos que iban de camino al campo.<sup class="versenum">13&nbsp;</sup>Estos volvieron y avisaron a los dem&aacute;s, pero no les creyeron a ellos tampoco.</p>

	<p><sup class="versenum">14&nbsp;</sup>Por &uacute;ltimo se apareci&oacute; Jes&uacute;s a los once mientras com&iacute;an; los reprendi&oacute; por su falta de fe y por su obstinaci&oacute;n en no creerles a los que lo hab&iacute;an visto resucitado.</p>

	<p><sup class="versenum">15&nbsp;</sup>Les dijo: &laquo;Vayan por todo el mundo y anuncien las buenas nuevas a toda criatura.<sup class="versenum">16&nbsp;</sup>El que crea y sea bautizado ser&aacute; salvo, pero el que no crea ser&aacute; condenado.<sup class="versenum">17&nbsp;</sup>Estas se&ntilde;ales acompa&ntilde;ar&aacute;n a los que crean: en mi nombre expulsar&aacute;n demonios; hablar&aacute;n en nuevas lenguas;<sup class="versenum">18&nbsp;</sup>tomar&aacute;n en sus manos serpientes; y, cuando beban algo venenoso, no les har&aacute; da&ntilde;o alguno; pondr&aacute;n las manos sobre los enfermos, y estos recobrar&aacute;n la salud&raquo;.</p>
	<!-- end bible --></div>

	<p>&nbsp;</p>
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

			<td class="social" @click="share('lesson', 'Liderazgo de resurrección: ', '/content/M2/spa/multiply2/multiply250.html')">
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
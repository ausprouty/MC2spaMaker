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
                        <div class="chapter_number ltr"><h1>38.</h1></div>
                        <div class="chapter_title ltr"><h1>Cosecha de una vida transformada</h1></div>
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
	<li class="back">Lea o vea <strong>Marcos 7:31-8:9</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Marcos 7:31-8:9</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s sana a un sordomudo</h3>

<p><sup class="versenum">31&nbsp;</sup>Luego regres&oacute; Jes&uacute;s de la regi&oacute;n de Tiro y se dirigi&oacute; por Sid&oacute;n al mar de Galilea, intern&aacute;ndose en la regi&oacute;n de Dec&aacute;polis.<sup class="versenum">32&nbsp;</sup>All&iacute; le llevaron un sordo tartamudo, y le suplicaban que pusiera la mano sobre &eacute;l.</p>

<p><sup class="versenum">33&nbsp;</sup>Jes&uacute;s lo apart&oacute; de la multitud para estar a solas con &eacute;l, le puso los dedos en los o&iacute;dos y le toc&oacute; la lengua con saliva.<sup class="versenum">34&nbsp;</sup>Luego, mirando al cielo, suspir&oacute; profundamente y le dijo: &laquo;<em class="transliteration">&iexcl;Efat&aacute;!</em>&raquo; (que significa: &iexcl;&Aacute;brete!).<sup class="versenum">35&nbsp;</sup>Con esto, se le abrieron los o&iacute;dos al hombre, se le destrab&oacute; la lengua y comenz&oacute; a hablar normalmente.</p>

<p><sup class="versenum">36&nbsp;</sup>Jes&uacute;s les mand&oacute; que no se lo dijeran a nadie, pero cuanto m&aacute;s se lo prohib&iacute;a, tanto m&aacute;s lo segu&iacute;an propagando.<sup class="versenum">37&nbsp;</sup>La gente estaba sumamente asombrada, y dec&iacute;a: &laquo;Todo lo hace bien. Hasta hace o&iacute;r a los sordos y hablar a los mudos&raquo;.</p>

<h3>Jes&uacute;s alimenta a los cuatro mil</h3>

<p><sup class="versenum">1 </sup>En aquellos d&iacute;as se reuni&oacute; de nuevo mucha gente. Como no ten&iacute;an nada que comer, Jes&uacute;s llam&oacute; a sus disc&iacute;pulos y les dijo:</p>

<p><sup class="versenum">2&nbsp;</sup>&mdash;Siento compasi&oacute;n de esta gente porque ya llevan tres d&iacute;as conmigo y no tienen nada que comer.<sup class="versenum">3&nbsp;</sup>Si los despido a sus casas sin haber comido, se van a desmayar por el camino, porque algunos de ellos han venido de lejos.</p>

<p><sup class="versenum">4&nbsp;</sup>Los disc&iacute;pulos objetaron:</p>

<p>&mdash;&iquest;D&oacute;nde se va a conseguir suficiente pan en este lugar despoblado para darles de comer?</p>

<p><sup class="versenum">5&nbsp;</sup>&mdash;&iquest;Cu&aacute;ntos panes tienen? &mdash;les pregunt&oacute; Jes&uacute;s.</p>

<p>&mdash;Siete &mdash;respondieron.</p>

<p><sup class="versenum">6&nbsp;</sup>Entonces mand&oacute; que la gente se sentara en el suelo. Tomando los siete panes, dio gracias, los parti&oacute; y se los fue dando a sus disc&iacute;pulos para que los repartieran a la gente, y as&iacute; lo hicieron.<sup class="versenum">7&nbsp;</sup>Ten&iacute;an adem&aacute;s unos cuantos pescaditos. Dio gracias por ellos tambi&eacute;n y les dijo a los disc&iacute;pulos que los repartieran.<sup class="versenum">8&nbsp;</sup>La gente comi&oacute; hasta quedar satisfecha. Despu&eacute;s los disc&iacute;pulos recogieron siete cestas llenas de pedazos que sobraron.<sup class="versenum">9&nbsp;</sup>Los que comieron eran unos cuatro mil. ...</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/238.mp4" type="button" class="external-movie">
         Mira &nbsp;Marcos 7:31-8:9&nbsp;</button>
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

<p class="up">Jes&uacute;s prioriz&oacute; la capacitaci&oacute;n y el desarrollo de Sus futuros l&iacute;deres del movimiento. Se retira con ellos al norte a Tiro y Sid&oacute;n, fuera de su pa&iacute;s, y lejos de las presiones del ministerio. Luego viajan a trav&eacute;s y de regreso al territorio extranjero de la Dec&aacute;polis en el lado oriental del lago de Galilea. Esta es la primera visita a esta &aacute;rea desde que el hombre pose&iacute;do por el demonio fue salvado y enviado de vuelta para compartir su historia con familiares y amigos. &iexcl;Qu&eacute; contraste con la visita anterior cuando la gente le pidi&oacute; a Jes&uacute;s que se fuera! Ahora, a medida que se difunden las noticias acerca de &Eacute;l, miles de personas se re&uacute;nen para escuchar Su ense&ntilde;anza y experimentar Su poder en sus propias vidas. Ni siquiera se van a casa a comer o dormir. Despu&eacute;s de 3 d&iacute;as, Jes&uacute;s involucra a Su equipo en otra experiencia de aprendizaje de Su gran compasi&oacute;n por todas las personas y Su poder para proveer. Aprenden que el testimonio de una vida transformada puede abrir la puerta a grupos enteros de personas nuevas. Al participar en la alimentaci&oacute;n milagrosa de m&aacute;s de 4000 personas, ven la compasi&oacute;n de Jes&uacute;s por todas las naciones.</p>

<p class="up">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Mateo 15:29-38</span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">29&nbsp;</sup>Sali&oacute; Jes&uacute;s de all&iacute; y lleg&oacute; a orillas del mar de Galilea. Luego subi&oacute; a la monta&ntilde;a y se sent&oacute;.<sup class="versenum">30&nbsp;</sup>Se le acercaron grandes multitudes que llevaban cojos, ciegos, lisiados, mudos y muchos enfermos m&aacute;s, y los pusieron a sus pies; y &eacute;l los san&oacute;.<sup class="versenum">31&nbsp;</sup>La gente se asombraba al ver a los mudos hablar, a los lisiados recobrar la salud, a los cojos andar y a los ciegos ver. Y alababan al Dios de Israel.</p>

<p><sup class="versenum">32&nbsp;</sup>Jes&uacute;s llam&oacute; a sus disc&iacute;pulos y les dijo:</p>

<p>&mdash;Siento compasi&oacute;n de esta gente porque ya llevan tres d&iacute;as conmigo y no tienen nada que comer. No quiero despedirlos sin comer, no sea que se desmayen por el camino.</p>

<p><sup class="versenum">33&nbsp;</sup>Los disc&iacute;pulos objetaron:</p>

<p>&mdash;&iquest;D&oacute;nde podr&iacute;amos conseguir en este lugar despoblado suficiente pan para dar de comer a toda esta multitud?</p>

<p><sup class="versenum">34&nbsp;</sup>&mdash;&iquest;Cu&aacute;ntos panes tienen? &mdash;les pregunt&oacute; Jes&uacute;s.</p>

<p>&mdash;Siete, y unos pocos pescaditos.</p>

<p><sup class="versenum">35&nbsp;</sup>Luego mand&oacute; que la gente se sentara en el suelo.<sup class="versenum">36&nbsp;</sup>Tomando los siete panes y los pescados, dio gracias, los parti&oacute; y se los fue dando a los disc&iacute;pulos. Estos, a su vez, los distribuyeron a la gente.<sup class="versenum">37&nbsp;</sup>Todos comieron hasta quedar satisfechos. Despu&eacute;s los disc&iacute;pulos recogieron siete cestas llenas de pedazos que sobraron.<sup class="versenum">38&nbsp;</sup>Los que comieron eran cuatro mil hombres, sin contar a las mujeres y a los ni&ntilde;os.</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<ul>
</ul>

<p>&nbsp;</p>
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

			<td class="social" @click="share('lesson', 'Cosecha de una vida transformada: ', '/content/M2/spa/multiply2/multiply238.html')">
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
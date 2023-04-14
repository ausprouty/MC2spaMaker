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
                        <div class="chapter_number ltr"><h1>51.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo Pastoral</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 21:1-25</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s y la pesca milagrosa</h3>

<p><sup class="versenum">1 </sup>Despu&eacute;s de esto Jes&uacute;s se apareci&oacute; de nuevo a sus disc&iacute;pulos, junto al lago de Tiber&iacute;ades. Sucedi&oacute; de esta manera:<sup class="versenum">2&nbsp;</sup>Estaban juntos Sim&oacute;n Pedro, Tom&aacute;s (al que apodaban el Gemelo), Natanael, el de Can&aacute; de Galilea, los hijos de Zebedeo, y otros dos disc&iacute;pulos.</p>

<p><sup class="versenum">3&nbsp;</sup>&mdash;Me voy a pescar &mdash;dijo Sim&oacute;n Pedro.</p>

<p>&mdash;Nos vamos contigo &mdash;contestaron ellos.</p>

<p>Salieron, pues, de all&iacute; y se embarcaron, pero esa noche no pescaron nada.</p>

<p><sup class="versenum">4&nbsp;</sup>Al despuntar el alba Jes&uacute;s se hizo presente en la orilla, pero los disc&iacute;pulos no se dieron cuenta de que era &eacute;l.</p>

<p><sup class="versenum">5&nbsp;</sup>&mdash;Muchachos, &iquest;no tienen algo de comer? &mdash;les pregunt&oacute; Jes&uacute;s.</p>

<p>&mdash;No &mdash;respondieron ellos.</p>

<p><sup class="versenum">6&nbsp;</sup>&mdash;Tiren la red a la derecha de la barca, y pescar&aacute;n algo.</p>

<p>As&iacute; lo hicieron, y era tal la cantidad de pescados que ya no pod&iacute;an sacar la red.</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;&iexcl;Es el Se&ntilde;or! &mdash;dijo a Pedro el disc&iacute;pulo a quien Jes&uacute;s amaba.</p>

<p>Tan pronto como Sim&oacute;n Pedro le oy&oacute; decir: &laquo;Es el Se&ntilde;or&raquo;, se puso la ropa, pues estaba semidesnudo, y se tir&oacute; al agua.<sup class="versenum">8&nbsp;</sup>Los otros disc&iacute;pulos lo siguieron en la barca, arrastrando la red llena de pescados, pues estaban a escasos cien metros de la orilla.<sup class="versenum">9&nbsp;</sup>Al desembarcar, vieron unas brasas con un pescado encima, y un pan.</p>

<p><sup class="versenum">10&nbsp;</sup>&mdash;Traigan algunos de los pescados que acaban de sacar &mdash;les dijo Jes&uacute;s.</p>

<p><sup class="versenum">11&nbsp;</sup>Sim&oacute;n Pedro subi&oacute; a bordo y arrastr&oacute; hasta la orilla la red, la cual estaba llena de pescados de buen tama&ntilde;o. Eran ciento cincuenta y tres, pero a pesar de ser tantos la red no se rompi&oacute;.</p>

<p><sup class="versenum">12&nbsp;</sup>&mdash;Vengan a desayunar &mdash;les dijo Jes&uacute;s.</p>

<p>Ninguno de los disc&iacute;pulos se atrev&iacute;a a preguntarle: &laquo;&iquest;Qui&eacute;n eres t&uacute;?&raquo;, porque sab&iacute;an que era el Se&ntilde;or.<sup class="versenum">13&nbsp;</sup>Jes&uacute;s se acerc&oacute;, tom&oacute; el pan y se lo dio a ellos, e hizo lo mismo con el pescado.<sup class="versenum">14&nbsp;</sup>Esta fue la tercera vez que Jes&uacute;s se apareci&oacute; a sus disc&iacute;pulos despu&eacute;s de haber resucitado.</p>

<h3>Jes&uacute;s restituye a Pedro</h3>

<p><sup class="versenum">15&nbsp;</sup>Cuando terminaron de desayunar, Jes&uacute;s le pregunt&oacute; a Sim&oacute;n Pedro:</p>

<p>&mdash;Sim&oacute;n, hijo de Juan, &iquest;me amas m&aacute;s que estos?</p>

<p>&mdash;S&iacute;, Se&ntilde;or, t&uacute; sabes que te quiero &mdash;contest&oacute; Pedro.</p>

<p>&mdash;Apacienta mis corderos &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">16&nbsp;</sup>Y volvi&oacute; a preguntarle:</p>

<p>&mdash;Sim&oacute;n, hijo de Juan, &iquest;me amas?</p>

<p>&mdash;S&iacute;, Se&ntilde;or, t&uacute; sabes que te quiero.</p>

<p>&mdash;Cuida de mis ovejas.</p>

<p><sup class="versenum">17&nbsp;</sup>Por tercera vez Jes&uacute;s le pregunt&oacute;:</p>

<p>&mdash;Sim&oacute;n, hijo de Juan, &iquest;me quieres?</p>

<p>A Pedro le doli&oacute; que por tercera vez Jes&uacute;s le hubiera preguntado: &laquo;&iquest;Me quieres?&raquo; As&iacute; que le dijo:</p>

<p>&mdash;Se&ntilde;or, t&uacute; lo sabes todo; t&uacute; sabes que te quiero.</p>

<p>&mdash;Apacienta mis ovejas &mdash;le dijo Jes&uacute;s&mdash;.<sup class="versenum">18&nbsp;</sup>De veras te aseguro que cuando eras m&aacute;s joven te vest&iacute;as t&uacute; mismo e ibas adonde quer&iacute;as; pero, cuando seas viejo, extender&aacute;s las manos y otro te vestir&aacute; y te llevar&aacute; adonde no quieras ir.</p>

<p><sup class="versenum">19&nbsp;</sup>Esto dijo Jes&uacute;s para dar a entender la clase de muerte con que Pedro glorificar&iacute;a a Dios. Despu&eacute;s de eso a&ntilde;adi&oacute;:</p>

<p>&mdash;&iexcl;S&iacute;gueme!</p>

<p><sup class="versenum">20&nbsp;</sup>Al volverse, Pedro vio que los segu&iacute;a el disc&iacute;pulo a quien Jes&uacute;s amaba, el mismo que en la cena se hab&iacute;a reclinado sobre Jes&uacute;s y le hab&iacute;a dicho: &laquo;Se&ntilde;or, &iquest;qui&eacute;n es el que va a traicionarte?&raquo;<sup class="versenum">21&nbsp;</sup>Al verlo, Pedro pregunt&oacute;:</p>

<p>&mdash;Se&ntilde;or, &iquest;y este, qu&eacute;?</p>

<p><sup class="versenum">22&nbsp;</sup>&mdash;Si quiero que &eacute;l permanezca vivo hasta que yo vuelva, &iquest;a ti qu&eacute;? T&uacute; s&iacute;gueme no m&aacute;s.</p>

<p><sup class="versenum">23&nbsp;</sup>Por este motivo corri&oacute; entre los hermanos el rumor de que aquel disc&iacute;pulo no morir&iacute;a. Pero Jes&uacute;s no dijo que no morir&iacute;a, sino solamente: &laquo;Si quiero que &eacute;l permanezca vivo hasta que yo vuelva, &iquest;a ti qu&eacute;?&raquo;</p>

<p><sup class="versenum">24&nbsp;</sup>Este es el disc&iacute;pulo que da testimonio de estas cosas, y las escribi&oacute;. Y estamos convencidos de que su testimonio es ver&iacute;dico.</p>

<p><sup class="versenum">25&nbsp;</sup>Jes&uacute;s hizo tambi&eacute;n muchas otras cosas, tantas que, si se escribiera cada una de ellas, pienso que los libros escritos no cabr&iacute;an en el mundo entero.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/251.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 21:1-25&nbsp;</button>
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
<!-- end default revealSummary --><ul>
<li class="nobreak-final-final">Despu&eacute;s de levantarse de entre los muertos, Jes&uacute;s se aparece a Sus disc&iacute;pulos en varias ocasiones. Hasta 500 personas lo ven a la vez (<span class="popup-link" @click = "popUp('pop3')"> 1 Corintios 15:6</span>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">6&nbsp;</sup>Despu&eacute;s se apareci&oacute; a m&aacute;s de quinientos hermanos a la vez, la mayor&iacute;a de los cuales vive todav&iacute;a, aunque algunos han muerto.</p>
<!-- end bible --></div>
). En esta ocasi&oacute;n, en Galilea, &Eacute;l visita a Sus l&iacute;deres que han regresado a su antigua vida de pesca. Cuando experimentan la provisi&oacute;n milagrosa de peces como lo hicieron cuando Jes&uacute;s los llam&oacute; unos a&ntilde;os antes, reconocen que es Jes&uacute;s. Pedro est&aacute; emocionado de volver a ver al Se&ntilde;or. Jes&uacute;s habla con &eacute;l acerca de su compromiso del coraz&oacute;n. &Eacute;l le pregunta si Pedro lo ama m&aacute;s que su antigua forma de vida. Si es as&iacute;, entonces Pedro debe preocuparse por las cosas que a Jes&uacute;s le importan. &Eacute;l debe pastorear a otros como Jes&uacute;s. Una vez m&aacute;s Pedro es restaurado y llamado a seguir a Jes&uacute;s y continuar la obra de pescar y cuidar a los hombres. Esta es la &uacute;ltima vez que vemos a Peter volviendo a la pesca



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
	<li class="up">Evangelio</li>
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

			<td class="social" @click="share('lesson', 'Liderazgo Pastoral: ', '/content/M2/spa/multiply2/multiply251.html')">
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
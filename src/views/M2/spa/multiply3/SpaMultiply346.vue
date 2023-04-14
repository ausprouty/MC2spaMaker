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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>46.</h1></div>
                        <div class="chapter_title ltr"><h1>Pablo interrogado por las autoridades</h1></div>
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

<p class="back">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (Filipenses 2:11b; 1 Timoteo 2:4-6a)</p>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar a las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y aliento.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunta: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tu declaraci&oacute;n: &ldquo;Yo har&eacute;&hellip;&rdquo;?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y Animo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p><em>Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al</em>:</p>

<ul>
	<li>Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final.</li>
	<li>Reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo</li>
	<li>record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos</li>
</ul>

<p>Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada pueblo y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 22:22-23:11</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 22:22-23:11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pablo el ciudadano romano</h3>

<p><sup class="versenum">22&nbsp;</sup>La multitud estuvo escuchando a Pablo hasta que pronunci&oacute; esas palabras. Entonces levantaron la voz y gritaron: &laquo;&iexcl;B&oacute;rralo de la tierra! &iexcl;Ese tipo no merece vivir!&raquo;</p>

<p><sup class="versenum">23&nbsp;</sup>Como segu&iacute;an gritando, tirando sus mantos y arrojando polvo al aire,<sup class="versenum">24&nbsp;</sup>el comandante orden&oacute; que metieran a Pablo en el cuartel. Mand&oacute; que lo interrogaran a latigazos con el fin de averiguar por qu&eacute; gritaban as&iacute; contra &eacute;l.<sup class="versenum">25&nbsp;</sup>Cuando lo estaban sujetando con cadenas para azotarlo, Pablo le dijo al centuri&oacute;n que estaba all&iacute;:</p>

<p>&mdash;&iquest;Permite la ley que ustedes azoten a un ciudadano romano antes de ser juzgado?</p>

<p><sup class="versenum">26&nbsp;</sup>Al o&iacute;r esto, el centuri&oacute;n fue y avis&oacute; al comandante.</p>

<p>&mdash;&iquest;Qu&eacute; va a hacer usted? Resulta que ese hombre es ciudadano romano.</p>

<p><sup class="versenum">27&nbsp;</sup>El comandante se acerc&oacute; a Pablo y le dijo:</p>

<p>&mdash;Dime, &iquest;eres ciudadano romano?</p>

<p>&mdash;S&iacute;, lo soy.</p>

<p><sup class="versenum">28&nbsp;</sup>&mdash;A m&iacute; me cost&oacute; una fortuna adquirir mi ciudadan&iacute;a &mdash;le dijo el comandante.</p>

<p>&mdash;Pues yo la tengo de nacimiento &mdash;replic&oacute; Pablo.</p>

<p><sup class="versenum">29&nbsp;</sup>Los que iban a interrogarlo se retiraron en seguida. Al darse cuenta de que Pablo era ciudadano romano, el comandante mismo se asust&oacute; de haberlo encadenado.</p>

<h3>Pablo ante el Consejo</h3>

<p><sup class="versenum">30&nbsp;</sup>Al d&iacute;a siguiente, como el comandante quer&iacute;a saber con certeza de qu&eacute; acusaban los jud&iacute;os a Pablo, lo desat&oacute; y mand&oacute; que se reunieran los jefes de los sacerdotes y el Consejo en pleno. Luego llev&oacute; a Pablo para que compareciera ante ellos.</p>

<p><sup class="versenum">1 </sup>Pablo se qued&oacute; mirando fijamente al Consejo y dijo:</p>

<p>&mdash;Hermanos, hasta hoy yo he actuado delante de Dios con toda buena conciencia.</p>

<p><sup class="versenum">2&nbsp;</sup>Ante esto, el sumo sacerdote Anan&iacute;as orden&oacute; a los que estaban cerca de Pablo que lo golpearan en la boca.</p>

<p><sup class="versenum">3&nbsp;</sup>&mdash;&iexcl;Hip&oacute;crita, a usted tambi&eacute;n lo va a golpear Dios! &mdash;reaccion&oacute; Pablo&mdash;. &iexcl;Ah&iacute; est&aacute; sentado para juzgarme seg&uacute;n la ley!, &iquest;y usted mismo viola la ley al mandar que me golpeen?</p>

<p><sup class="versenum">4&nbsp;</sup>Los que estaban junto a Pablo le interpelaron:</p>

<p>&mdash;&iquest;C&oacute;mo te atreves a insultar al sumo sacerdote de Dios?</p>

<p><sup class="versenum">5&nbsp;</sup>&mdash;Hermanos, no me hab&iacute;a dado cuenta de que es el sumo sacerdote &mdash;respondi&oacute; Pablo&mdash;; de hecho est&aacute; escrito: &ldquo;No hables mal del jefe de tu pueblo&rdquo;.</p>

<p><sup class="versenum">6&nbsp;</sup>Pablo, sabiendo que unos de ellos eran saduceos y los dem&aacute;s fariseos, exclam&oacute; en el Consejo:</p>

<p>&mdash;Hermanos, yo soy fariseo de pura cepa. Me est&aacute;n juzgando porque he puesto mi esperanza en la resurrecci&oacute;n de los muertos.</p>

<p><sup class="versenum">7&nbsp;</sup>Apenas dijo esto, surgi&oacute; un altercado entre los fariseos y los saduceos, y la asamblea qued&oacute; dividida.<sup class="versenum">8&nbsp;</sup>(Los saduceos sostienen que no hay resurrecci&oacute;n, ni &aacute;ngeles ni esp&iacute;ritus; los fariseos, en cambio, reconocen todo esto).</p>

<p><sup class="versenum">9&nbsp;</sup>Se produjo un gran alboroto, y algunos de los maestros de la ley que eran fariseos se pusieron de pie y protestaron. &laquo;No encontramos ning&uacute;n delito en este hombre &mdash;dijeron&mdash;. &iquest;Acaso no podr&iacute;a haberle hablado un esp&iacute;ritu o un &aacute;ngel?&raquo;<sup class="versenum">10&nbsp;</sup>Se torn&oacute; tan violento el altercado que el comandante tuvo miedo de que hicieran pedazos a Pablo. As&iacute; que orden&oacute; a los soldados que bajaran para sacarlo de all&iacute; por la fuerza y llev&aacute;rselo al cuartel.</p>

<p><sup class="versenum">11&nbsp;</sup>A la noche siguiente el Se&ntilde;or se apareci&oacute; a Pablo, y le dijo: &laquo;&iexcl;&Aacute;nimo! As&iacute; como has dado testimonio de m&iacute; en Jerusal&eacute;n, es necesario que lo des tambi&eacute;n en Roma&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/346.mp4" type="button" class="external-movie">
         Mira Hechos 22:22-23:11</button>
    <div class="collapsed"></div>




<h2 class="up">Preguntas de Descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; hay de nuevo o se ha desarrollado a estas alturas de la historia?</li>
	<li>&iquest;Qu&eacute; se est&aacute; modelando acerca de una vida dependiente del Esp&iacute;ritu, haciendo disc&iacute;pulos o liderazgo?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p>Preguntas adicionales que puede utilizar:</p>

<ul>
	<li>&iquest;C&oacute;mo contin&uacute;an los seguidores de Jes&uacute;s Su obra de hacer disc&iacute;pulos y plantar iglesias?</li>
	<li>&iquest;C&oacute;mo est&aacute; impactando el Evangelio en las personas y en la sociedad?</li>
	<li>&iquest;Qu&eacute; barreras u obst&aacute;culos se superaron y c&oacute;mo se superaron?</li>
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
<p class="up">Como ciudadano romano, Pablo estaba siendo protegido por el comandante, pero todav&iacute;a estaba en gran peligro. El comandante romano mostr&oacute; integridad al tratar de entender la situaci&oacute;n y seguir el derecho civil romano. Los jud&iacute;os eran muy celosos acerca de sus creencias religiosas, dispuestos a matar a aquellos que cre&iacute;an de manera diferente o, a su entender, &quot;ofend&iacute;an&quot; a Dios. Pablo aprovech&oacute; las diferencias teol&oacute;gicas entre los l&iacute;deres jud&iacute;os para cambiar el enfoque de s&iacute; mismo a su desacuerdo teol&oacute;gico. Jes&uacute;s se le apareci&oacute; a Pablo para animarlo a que &eacute;l estaba trabajando a trav&eacute;s de &eacute;l, a pesar de la respuesta hostil de los l&iacute;deres religiosos jud&iacute;os. A medida que perseguimos la expansi&oacute;n del Reino de Dios, Jes&uacute;s cumple su promesa de &quot;nunca dejarnos ni abandonarnos&quot;. (Mateo 28:20). Lee Efesios 2:10. Al igual que Pablo, el Se&ntilde;or nos ha creado a cada uno de nosotros para las buenas obras y &eacute;l soberanamente utiliza todas nuestras experiencias para llevar a cabo las obras que &eacute;l tiene para nosotros.</p>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:
	<ul>
		<li>Orar, Cuidar, Compartir</li>
		<li>Evangelio</li>
		<li>Estudios B&iacute;blicos Fundamentales</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo comparan con a su grupo.</li>
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
	<li>Comprometa las metas de todos al Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y que nos use para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Pablo interrogado por las autoridades: ', '/content/M2/spa/multiply3/multiply346.html')">
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
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
                        <div class="chapter_number ltr"><h1>51.</h1></div>
                        <div class="chapter_title ltr"><h1>Confiar en Jesús en circunstancias peligrosas</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 27:1-26</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 27:1-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pablo viaja a Roma</h3>

<p><sup class="versenum">1 </sup>Cuando se decidi&oacute; que naveg&aacute;ramos rumbo a Italia, entregaron a Pablo y a algunos otros presos a un centuri&oacute;n llamado Julio, que pertenec&iacute;a al batall&oacute;n imperial.<sup class="versenum">2&nbsp;</sup>Subimos a bordo de un barco, con matr&iacute;cula de Adramitio, que estaba a punto de zarpar hacia los puertos de la provincia de Asia, y nos hicimos a la mar. Nos acompa&ntilde;aba Aristarco, un macedonio de Tesal&oacute;nica.</p>

<p><sup class="versenum">3&nbsp;</sup>Al d&iacute;a siguiente hicimos escala en Sid&oacute;n; y Julio, con mucha amabilidad, le permiti&oacute; a Pablo visitar a sus amigos para que lo atendieran.<sup class="versenum">4&nbsp;</sup>Desde Sid&oacute;n zarpamos y navegamos al abrigo de Chipre, porque los vientos nos eran contrarios.<sup class="versenum">5&nbsp;</sup>Despu&eacute;s de atravesar el mar frente a las costas de Cilicia y Panfilia, arribamos a Mira de Licia.<sup class="versenum">6&nbsp;</sup>All&iacute; el centuri&oacute;n encontr&oacute; un barco de Alejandr&iacute;a que iba para Italia, y nos hizo subir a bordo.<sup class="versenum">7&nbsp;</sup>Durante muchos d&iacute;as la navegaci&oacute;n fue lenta, y a duras penas llegamos frente a Gnido. Como el viento nos era desfavorable para seguir el rumbo trazado, navegamos al amparo de Creta, frente a Salmona.<sup class="versenum">8&nbsp;</sup>Seguimos con dificultad a lo largo de la costa y llegamos a un lugar llamado Buenos Puertos, cerca de la ciudad de Lasea.</p>

<p><sup class="versenum">9&nbsp;</sup>Se hab&iacute;a perdido mucho tiempo, y era peligrosa la navegaci&oacute;n por haber pasado ya la fiesta del ayuno. As&iacute; que Pablo les advirti&oacute;:<sup class="versenum">10&nbsp;</sup>&laquo;Se&ntilde;ores, veo que nuestro viaje va a ser desastroso y que va a causar mucho perjuicio tanto para el barco y su carga como para nuestras propias vidas&raquo;.<sup class="versenum">11&nbsp;</sup>Pero el centuri&oacute;n, en vez de hacerle caso, sigui&oacute; el consejo del timonel y del due&ntilde;o del barco.<sup class="versenum">12&nbsp;</sup>Como el puerto no era adecuado para invernar, la mayor&iacute;a decidi&oacute; que deb&iacute;amos seguir adelante, con la esperanza de llegar a Fenice, puerto de Creta que da al suroeste y al noroeste, y pasar all&iacute; el invierno.</p>

<h3>La tempestad</h3>

<p><sup class="versenum">13&nbsp;</sup>Cuando comenz&oacute; a soplar un viento suave del sur, creyeron que pod&iacute;an conseguir lo que quer&iacute;an, as&iacute; que levaron anclas y navegaron junto a la costa de Creta.<sup class="versenum">14&nbsp;</sup>Poco despu&eacute;s se nos vino encima un viento huracanado, llamado Nordeste, que ven&iacute;a desde la isla.<sup class="versenum">15&nbsp;</sup>El barco qued&oacute; atrapado por la tempestad y no pod&iacute;a hacerle frente al viento, as&iacute; que nos dejamos llevar a la deriva.<sup class="versenum">16&nbsp;</sup>Mientras pas&aacute;bamos al abrigo de un islote llamado Cauda, a duras penas pudimos sujetar el bote salvavidas.<sup class="versenum">17&nbsp;</sup>Despu&eacute;s de subirlo a bordo, amarraron con sogas todo el casco del barco para reforzarlo. Temiendo que fueran a encallar en los bancos de arena de la Sirte, echaron el ancla flotante y dejaron el barco a la deriva.<sup class="versenum">18&nbsp;</sup>Al d&iacute;a siguiente, dado que la tempestad segu&iacute;a arremetiendo con mucha fuerza contra nosotros, comenzaron a arrojar la carga por la borda.<sup class="versenum">19&nbsp;</sup>Al tercer d&iacute;a, con sus propias manos arrojaron al mar los aparejos del barco.<sup class="versenum">20&nbsp;</sup>Como pasaron muchos d&iacute;as sin que aparecieran ni el sol ni las estrellas, y la tempestad segu&iacute;a arreciando, perdimos al fin toda esperanza de salvarnos.</p>

<p><sup class="versenum">21&nbsp;</sup>Llev&aacute;bamos ya mucho tiempo sin comer, as&iacute; que Pablo se puso en medio de todos y dijo: &laquo;Se&ntilde;ores, deb&iacute;an haber seguido mi consejo y no haber zarpado de Creta; as&iacute; se habr&iacute;an ahorrado este perjuicio y esta p&eacute;rdida.<sup class="versenum">22&nbsp;</sup>Pero ahora los exhorto a cobrar &aacute;nimo, porque ninguno de ustedes perder&aacute; la vida; solo se perder&aacute; el barco.<sup class="versenum">23&nbsp;</sup>Anoche se me apareci&oacute; un &aacute;ngel del Dios a quien pertenezco y a quien sirvo,<sup class="versenum">24&nbsp;</sup>y me dijo: &ldquo;No tengas miedo, Pablo. Tienes que comparecer ante el emperador; y Dios te ha concedido la vida de todos los que navegan contigo&rdquo;.<sup class="versenum">25&nbsp;</sup>As&iacute; que &iexcl;&aacute;nimo, se&ntilde;ores! Conf&iacute;o en Dios que suceder&aacute; tal y como se me dijo.<sup class="versenum">26&nbsp;</sup>Sin embargo, tenemos que encallar en alguna isla&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/351.mp4" type="button" class="external-movie">
         Mira Hechos 27:1-26</button>
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
<p class="up">Lucas y Aristarco, uno de los l&iacute;deres tesalonicenses que lleg&oacute; a Jerusal&eacute;n con Pablo dos a&ntilde;os antes, se unieron al traslado de prisioneros a Roma (v2). Los marineros tomaron un gran riesgo al tratar de navegar demasiado tarde en la temporada de viajes, poniendo a todos en circunstancias muy peligrosas. Por lo que sabemos Pablo, Lucas y Aristarco eran los &uacute;nicos cristianos a bordo con unos 273 no cristianos (Hechos 27:37). Vemos el coraz&oacute;n de compasi&oacute;n que Jes&uacute;s tiene por las personas cuando prometi&oacute; rescatar a Pablo y a todos los que est&aacute;n en el barco. Pablo vivi&oacute; su confianza en Jes&uacute;s delante de todos, pero tambi&eacute;n fue muy pr&aacute;ctico en la forma en que satisfizo las necesidades de la gente. La confianza y la piedad no descartaban el sentido com&uacute;n de lo que la gente necesitaba. A pesar de que estaba en la humilde posici&oacute;n de un prisionero, el car&aacute;cter de liderazgo y la competencia de Pablo se ve claramente aqu&iacute;. Los dem&aacute;s comenzaron a escucharlo. Aprendemos que la influencia no depende de nuestra posici&oacute;n en la vida.</p>

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

			<td class="social" @click="share('lesson', 'Confiar en Jesús en circunstancias peligrosas: ', '/content/M2/spa/multiply3/multiply351.html')">
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
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
                        <div class="chapter_number ltr"><h1>19.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús prepara corazones</h1></div>
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
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
	</div>
	</li>
</ul>

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
	<li class="back">Lea o vea <strong>Hechos 10:1-33</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 10:1-33</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Cornelio manda llamar a Pedro</h3>

<p><sup class="versenum">1 </sup>Viv&iacute;a en Cesarea un centuri&oacute;n llamado Cornelio, del regimiento conocido como el Italiano.<sup class="versenum">2&nbsp;</sup>&Eacute;l y toda su familia eran devotos y temerosos de Dios. Realizaba muchas obras de beneficencia para el pueblo de Israel y oraba a Dios constantemente.<sup class="versenum">3&nbsp;</sup>Un d&iacute;a, como a las tres de la tarde, tuvo una visi&oacute;n. Vio claramente a un &aacute;ngel de Dios que se le acercaba y le dec&iacute;a:</p>

<p>&mdash;&iexcl;Cornelio!</p>

<p><sup class="versenum">4&nbsp;</sup>&mdash;&iquest;Qu&eacute; quieres, Se&ntilde;or? &mdash;le pregunt&oacute; Cornelio, mir&aacute;ndolo fijamente y con mucho miedo.</p>

<p>&mdash;Dios ha recibido tus oraciones y tus obras de beneficencia como una ofrenda &mdash;le contest&oacute; el &aacute;ngel&mdash;.<sup class="versenum">5&nbsp;</sup>Env&iacute;a de inmediato a algunos hombres a Jope para que hagan venir a un tal Sim&oacute;n, apodado Pedro.<sup class="versenum">6&nbsp;</sup>&Eacute;l se hospeda con Sim&oacute;n el curtidor, que tiene su casa junto al mar.</p>

<p><sup class="versenum">7&nbsp;</sup>Despu&eacute;s de que se fue el &aacute;ngel que le hab&iacute;a hablado, Cornelio llam&oacute; a dos de sus siervos y a un soldado devoto de los que le serv&iacute;an regularmente.<sup class="versenum">8&nbsp;</sup>Les explic&oacute; todo lo que hab&iacute;a sucedido y los envi&oacute; a Jope.</p>

<h3>La visi&oacute;n de Pedro</h3>

<p><sup class="versenum">9&nbsp;</sup>Al d&iacute;a siguiente, mientras ellos iban de camino y se acercaban a la ciudad, Pedro subi&oacute; a la azotea a orar. Era casi el mediod&iacute;a.<sup class="versenum">10&nbsp;</sup>Tuvo hambre y quiso algo de comer. Mientras se lo preparaban, le sobrevino un &eacute;xtasis.<sup class="versenum">11&nbsp;</sup>Vio el cielo abierto y algo parecido a una gran s&aacute;bana que, suspendida por las cuatro puntas, descend&iacute;a hacia la tierra.<sup class="versenum">12&nbsp;</sup>En ella hab&iacute;a toda clase de cuadr&uacute;pedos, como tambi&eacute;n reptiles y aves.</p>

<p><sup class="versenum">13&nbsp;</sup>&mdash;Lev&aacute;ntate, Pedro; mata y come &mdash;le dijo una voz.</p>

<p><sup class="versenum">14&nbsp;</sup>&mdash;&iexcl;De ninguna manera, Se&ntilde;or! &mdash;replic&oacute; Pedro&mdash;. Jam&aacute;s he comido nada impuro o inmundo.</p>

<p><sup class="versenum">15&nbsp;</sup>Por segunda vez le insisti&oacute; la voz:</p>

<p>&mdash;Lo que Dios ha purificado, t&uacute; no lo llames impuro.</p>

<p><sup class="versenum">16&nbsp;</sup>Esto sucedi&oacute; tres veces, y en seguida la s&aacute;bana fue recogida al cielo.</p>

<p><sup class="versenum">17&nbsp;</sup>Pedro no atinaba a explicarse cu&aacute;l podr&iacute;a ser el significado de la visi&oacute;n. Mientras tanto, los hombres enviados por Cornelio, que estaban preguntando por la casa de Sim&oacute;n, se presentaron a la puerta.<sup class="versenum">18&nbsp;</sup>Llamando, averiguaron si all&iacute; se hospedaba Sim&oacute;n, apodado Pedro.</p>

<p><sup class="versenum">19&nbsp;</sup>Mientras Pedro segu&iacute;a reflexionando sobre el significado de la visi&oacute;n, el Esp&iacute;ritu le dijo: &laquo;Mira, Sim&oacute;n, tres hombres te buscan.<sup class="versenum">20&nbsp;</sup>Date prisa, baja y no dudes en ir con ellos, porque yo los he enviado&raquo;.</p>

<p><sup class="versenum">21&nbsp;</sup>Pedro baj&oacute; y les dijo a los hombres:</p>

<p>&mdash;Aqu&iacute; estoy; yo soy el que ustedes buscan. &iquest;Qu&eacute; asunto los ha tra&iacute;do por ac&aacute;?</p>

<p><sup class="versenum">22&nbsp;</sup>Ellos le contestaron:</p>

<p>&mdash;Venimos de parte del centuri&oacute;n Cornelio, un hombre justo y temeroso de Dios, respetado por todo el pueblo jud&iacute;o. Un &aacute;ngel de Dios le dio instrucciones de invitarlo a usted a su casa para escuchar lo que usted tiene que decirle.</p>

<p><sup class="versenum">23&nbsp;</sup>Entonces Pedro los invit&oacute; a pasar y los hosped&oacute;.</p>

<h3>Pedro en casa de Cornelio</h3>

<p>Al d&iacute;a siguiente, Pedro se fue con ellos acompa&ntilde;ado de algunos creyentes de Jope.<sup class="versenum">24&nbsp;</sup>Un d&iacute;a despu&eacute;s lleg&oacute; a Cesarea. Cornelio estaba esper&aacute;ndolo con los parientes y amigos &iacute;ntimos que hab&iacute;a reunido.<sup class="versenum">25&nbsp;</sup>Al llegar Pedro a la casa, Cornelio sali&oacute; a recibirlo y, postr&aacute;ndose delante de &eacute;l, le rindi&oacute; homenaje.<sup class="versenum">26&nbsp;</sup>Pero Pedro hizo que se levantara, y le dijo:</p>

<p>&mdash;Ponte de pie, que solo soy un hombre como t&uacute;.</p>

<p><sup class="versenum">27&nbsp;</sup>Pedro entr&oacute; en la casa conversando con &eacute;l, y encontr&oacute; a muchos reunidos.</p>

<p><sup class="versenum">28&nbsp;</sup>Entonces les habl&oacute; as&iacute;:</p>

<p>&mdash;Ustedes saben muy bien que nuestra ley proh&iacute;be que un jud&iacute;o se junte con un extranjero o lo visite. Pero Dios me ha hecho ver que a nadie debo llamar impuro o inmundo.<sup class="versenum">29&nbsp;</sup>Por eso, cuando mandaron por m&iacute;, vine sin poner ninguna objeci&oacute;n. Ahora perm&iacute;tanme preguntarles: &iquest;para qu&eacute; me hicieron venir?</p>

<p><sup class="versenum">30&nbsp;</sup>Cornelio contest&oacute;:</p>

<p>&mdash;Hace cuatro d&iacute;as a esta misma hora, las tres de la tarde, estaba yo en casa orando. De repente apareci&oacute; delante de m&iacute; un hombre vestido con ropa brillante,<sup class="versenum">31&nbsp;</sup>y me dijo: &ldquo;Cornelio, Dios ha o&iacute;do tu oraci&oacute;n y se ha acordado de tus obras de beneficencia.<sup class="versenum">32&nbsp;</sup>Por lo tanto, env&iacute;a a alguien a Jope para hacer venir a Sim&oacute;n, apodado Pedro, que se hospeda en casa de Sim&oacute;n el curtidor, junto al mar&rdquo;.<sup class="versenum">33&nbsp;</sup>As&iacute; que inmediatamente mand&eacute; a llamarte, y t&uacute; has tenido la bondad de venir. Ahora estamos todos aqu&iacute;, en la presencia de Dios, para escuchar todo lo que el Se&ntilde;or te ha encomendado que nos digas.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/319.mp4" type="button" class="external-movie">
         Mira Hechos 10:1-33</button>
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
<p class="up">Fue un viaje de 2 d&iacute;as desde Jope a Cesarea. A trav&eacute;s de una serie de visiones, Jes&uacute;s ayuda a Pedro y a los creyentes jud&iacute;os con &eacute;l a cruzar una importante barrera cultural en la iglesia jud&iacute;a. A un buen jud&iacute;o practicante se le prohibi&oacute; entrar en la casa de un gentil. Sin embargo, Jes&uacute;s env&iacute;a a Pedro a la casa de Cornelio. Cornelio no s&oacute;lo era un gentil, sino un poderoso centuri&oacute;n romano - un comandante militar a cargo de unos 80-100 soldados italianos. Cornelio es un gran ejemplo de una persona de paz. &Eacute;l es alguien inesperado, cuyo coraz&oacute;n es preparado por Jes&uacute;s, y que re&uacute;ne a otros en su red de relaciones para escuchar acerca de Jes&uacute;s con &eacute;l. Esta historia muestra c&oacute;mo el Se&ntilde;or prepara el coraz&oacute;n tanto del mensajero como de la persona de paz.</p>

</div>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

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

			<td class="social" @click="share('lesson', 'Jesús prepara corazones: ', '/content/M2/spa/multiply3/multiply319.html')">
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
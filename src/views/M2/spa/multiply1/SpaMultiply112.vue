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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>12.</h1></div>
                        <div class="chapter_title ltr"><h1>Abriendo puertas</h1></div>
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
	<li class="back">Ejemplo: Lea el <span class="popup-link" @click = "popUp('pop1')"> Salmo&nbsp;9:1-2</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<h4 class="psalm-title">Al director musical. S&iacute;gase la tonada de &laquo;La muerte del hijo&raquo;. Salmo de David.</h4>

	<h4 class="psalm-acrostic">&Aacute;lef</h4>

	<p><sup class="versenum">1 </sup>Quiero alabarte, <span class="divine-name small-caps">Se&ntilde;or, con todo el coraz&oacute;n,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y contar todas tus maravillas.<br />
	<sup class="versenum">2&nbsp;</sup>Quiero alegrarme y regocijarme en ti,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y cantar salmos a tu nombre, oh Alt&iacute;simo.</span></p>
	</div>
	<!-- end bible --></div>
	y canten alabanzas.</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

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
<p class="back"><em>Proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos.</em></p>

<p class="back">Ejemplo: Ya que todos est&aacute;n llamados a seguir a Jes&uacute;s y ser pescadores de hombres, debemos darnos cuenta de que s&oacute;lo hay dos tipos de personas en el mundo: las perdidas y las salvas. Las personas perdidas necesitan seguir a Jes&uacute;s. Las personas salvadas necesitan aprender a pescar los perdidos. Cuando ves el mundo como dos tipos de personas, entonces tus interacciones diarias se vuelven mucho m&aacute;s simples. Si conoces a una persona perdida, testimonio causa de ello. Si conoces a una persona salvada, ofr&eacute;cete a entrenarla. &iexcl;No puede ser mucho m&aacute;s f&aacute;cil que eso!</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="nobreak-final-final">Lee<span class="popup-link" @click = "popUp('pop2')">  Hechos 10:1-8</span>.&nbsp;</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Viv&iacute;a en Cesarea un centuri&oacute;n llamado Cornelio, del regimiento conocido como el Italiano.<sup class="versenum">2&nbsp;</sup>&Eacute;l y toda su familia eran devotos y temerosos de Dios. Realizaba muchas obras de beneficencia para el pueblo de Israel y oraba a Dios constantemente.<sup class="versenum">3&nbsp;</sup>Un d&iacute;a, como a las tres de la tarde, tuvo una visi&oacute;n. Vio claramente a un &aacute;ngel de Dios que se le acercaba y le dec&iacute;a:</p>

<p>&mdash;&iexcl;Cornelio!</p>

<p><sup class="versenum">4&nbsp;</sup>&mdash;&iquest;Qu&eacute; quieres, Se&ntilde;or? &mdash;le pregunt&oacute; Cornelio, mir&aacute;ndolo fijamente y con mucho miedo.</p>

<p>&mdash;Dios ha recibido tus oraciones y tus obras de beneficencia como una ofrenda &mdash;le contest&oacute; el &aacute;ngel&mdash;.<sup class="versenum">5&nbsp;</sup>Env&iacute;a de inmediato a algunos hombres a Jope para que hagan venir a un tal Sim&oacute;n, apodado Pedro.<sup class="versenum">6&nbsp;</sup>&Eacute;l se hospeda con Sim&oacute;n el curtidor, que tiene su casa junto al mar.</p>

<p><sup class="versenum">7&nbsp;</sup>Despu&eacute;s de que se fue el &aacute;ngel que le hab&iacute;a hablado, Cornelio llam&oacute; a dos de sus siervos y a un soldado devoto de los que le serv&iacute;an regularmente.<sup class="versenum">8&nbsp;</sup>Les explic&oacute; todo lo que hab&iacute;a sucedido y los envi&oacute; a Jope.</p>
<!-- end bible --></div>
&nbsp;Pedro fue dirigido por el Esp&iacute;ritu para ir a una ciudad costera llamada Cesarea, donde viv&iacute;a un l&iacute;der militar romano llamado Cornelio. &Eacute;l era una Persona de Paz, una persona preparada por Dios. Pedro obedeci&oacute; y viaj&oacute; a Cesarea para contarle a Cornelio acerca de Jes&uacute;s. Vamos a ver qu&eacute; pasa.

<p>&nbsp;</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 10:24-35</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 10:24-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">24&nbsp;</sup>Un d&iacute;a despu&eacute;s lleg&oacute; a Cesarea. Cornelio estaba esper&aacute;ndolo con los parientes y amigos &iacute;ntimos que hab&iacute;a reunido.<sup class="versenum">25&nbsp;</sup>Al llegar Pedro a la casa, Cornelio sali&oacute; a recibirlo y, postr&aacute;ndose delante de &eacute;l, le rindi&oacute; homenaje.<sup class="versenum">26&nbsp;</sup>Pero Pedro hizo que se levantara, y le dijo:</p>

<p>&mdash;Ponte de pie, que solo soy un hombre como t&uacute;.</p>

<p><sup class="versenum">27&nbsp;</sup>Pedro entr&oacute; en la casa conversando con &eacute;l, y encontr&oacute; a muchos reunidos.</p>

<p><sup class="versenum">28&nbsp;</sup>Entonces les habl&oacute; as&iacute;:</p>

<p>&mdash;Ustedes saben muy bien que nuestra ley proh&iacute;be que un jud&iacute;o se junte con un extranjero o lo visite. Pero Dios me ha hecho ver que a nadie debo llamar impuro o inmundo.<sup class="versenum">29&nbsp;</sup>Por eso, cuando mandaron por m&iacute;, vine sin poner ninguna objeci&oacute;n. Ahora perm&iacute;tanme preguntarles: &iquest;para qu&eacute; me hicieron venir?</p>

<p><sup class="versenum">30&nbsp;</sup>Cornelio contest&oacute;:</p>

<p>&mdash;Hace cuatro d&iacute;as a esta misma hora, las tres de la tarde, estaba yo en casa orando. De repente apareci&oacute; delante de m&iacute; un hombre vestido con ropa brillante,<sup class="versenum">31&nbsp;</sup>y me dijo: &ldquo;Cornelio, Dios ha o&iacute;do tu oraci&oacute;n y se ha acordado de tus obras de beneficencia.<sup class="versenum">32&nbsp;</sup>Por lo tanto, env&iacute;a a alguien a Jope para hacer venir a Sim&oacute;n, apodado Pedro, que se hospeda en casa de Sim&oacute;n el curtidor, junto al mar&rdquo;.<sup class="versenum">33&nbsp;</sup>As&iacute; que inmediatamente mand&eacute; a llamarte, y t&uacute; has tenido la bondad de venir. Ahora estamos todos aqu&iacute;, en la presencia de Dios, para escuchar todo lo que el Se&ntilde;or te ha encomendado que nos digas.</p>

<p><sup class="versenum">34&nbsp;</sup>Pedro tom&oacute; la palabra, y dijo:</p>

<p>&mdash;Ahora comprendo que en realidad para Dios no hay favoritismos,<sup class="versenum">35&nbsp;</sup>sino que en toda naci&oacute;n &eacute;l ve con agrado a los que le temen y act&uacute;an con justicia.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/112.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 10:24-35&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Preguntas de Descubrimiento (Todos responden)</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n (o qu&eacute; te gust&oacute; m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendiste acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendiste sobre las personas?</li>
	<li>&iquest;C&oacute;mo obedecer&aacute;s a Jes&uacute;s ahora que sabes esto?</li>
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
	<li class="nobreak-final-final">Las Personas de Paz son personas de relaciones. Podemos compartir el Evangelio con personas individuales, pero tambi&eacute;n tenemos que buscar oportunidades para seguir abriendo puertas para compartir con los amigos y familiares de las Personas de Paz. Otros ejemplos de la difusi&oacute;n del evangelio a trav&eacute;s de las relaciones son Lidia y su familia (<span class="popup-link" @click = "popUp('pop3')"> Hechos 16:14-15</span>),&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>Una de ellas, que se llamaba Lidia, adoraba a Dios. Era de la ciudad de Tiatira y vend&iacute;a telas de p&uacute;rpura. Mientras escuchaba, el Se&ntilde;or le abri&oacute; el coraz&oacute;n para que respondiera al mensaje de Pablo.<sup class="versenum">15&nbsp;</sup>Cuando fue bautizada con su familia, nos hizo la siguiente invitaci&oacute;n: &laquo;Si ustedes me consideran creyente en el Se&ntilde;or, vengan a hospedarse en mi casa&raquo;. Y nos persuadi&oacute;.</p>
	<!-- end bible --></div>
	el carcelero de Filipo y su familia (<span class="popup-link" @click = "popUp('pop4')"> Hechos 16:30-33</span>)&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>Luego los sac&oacute; y les pregunt&oacute;:</p>

	<p>&mdash;Se&ntilde;ores, &iquest;qu&eacute; tengo que hacer para ser salvo?</p>

	<p><sup class="versenum">31&nbsp;</sup>&mdash;Cree en el Se&ntilde;or Jes&uacute;s; as&iacute; t&uacute; y tu familia ser&aacute;n salvos &mdash;le contestaron.</p>

	<p><sup class="versenum">32&nbsp;</sup>Luego les expusieron la palabra de Dios a &eacute;l y a todos los dem&aacute;s que estaban en su casa.<sup class="versenum">33&nbsp;</sup>A esas horas de la noche, el carcelero se los llev&oacute; y les lav&oacute; las heridas; en seguida fueron bautizados &eacute;l y toda su familia.</p>
	<!-- end bible --></div>
	&nbsp;y Mateo, el recaudador de impuestos, y sus amigos (<span class="popup-link" @click = "popUp('pop5')"> Mateo 9:9-10</span>).

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>Al irse de all&iacute;, Jes&uacute;s vio a un hombre llamado Mateo, sentado a la mesa de recaudaci&oacute;n de impuestos. &laquo;S&iacute;gueme&raquo;, le dijo. Mateo se levant&oacute; y lo sigui&oacute;.</p>

	<p><sup class="versenum">10&nbsp;</sup>Mientras Jes&uacute;s estaba comiendo en casa de Mateo, muchos recaudadores de impuestos y pecadores llegaron y comieron con &eacute;l y sus disc&iacute;pulos.</p>
	<!-- end bible --></div>
	&nbsp;</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique la preparaci&oacute;n de un evento misional en la casa de una Persona de Paz.
	<ul>
		<li>Discuta c&oacute;mo le pedir&aacute;n a la Persona de Paz que sea el anfitri&oacute;n del evento.</li>
		<li>Discuta c&oacute;mo usar cortometrajes y clips de JESUS Film para tener conversaciones espirituales usando las 2 preguntas est&aacute;ndar.</li>
		<li>Discuta c&oacute;mo ofrecer una oportunidad para orar.</li>
		<li>Discuta c&oacute;mo hacer un seguimiento con aquellos que ponen su fe en Cristo.</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>De su lista Oikos identifique al menos una Persona de Paz a la que podr&iacute;a pedir que sea el anfitri&oacute;n del evento.</li>
	<li>Identifica a 5 personas de tu Lista Oikos con las que tomar&aacute;s la iniciativa de ministrar esta semana</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo compartan con su grupo.</li>
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


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Abriendo puertas: ', '/content/M2/spa/multiply1/multiply112.html')">
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
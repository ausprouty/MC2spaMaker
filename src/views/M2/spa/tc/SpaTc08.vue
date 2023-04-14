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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO PUEDE  USTED AMAR  POR FE?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 8.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO PUEDE USTED AMAR POR FE?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ EL PODER M&Aacute;S GRANDE QUE SE HAYA CONOCIDO</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p>El hermoso sal&oacute;n del Hotel Marriott en Chicago estaba completamente lleno con m&aacute;s de mil trescientos estudiantes universitarios y coordinadores de la Cruzada Estudiantil y Profesional para Cristo. Estos parec&iacute;an estar pendientes de cada una de mis palabras mientras les explicaba uno de los descubrimientos espirituales m&aacute;s emocionantes que hab&iacute;a hecho: c&oacute;mo amar por fe.</p>

<p>Por a&ntilde;os yo hab&iacute;a hablado sobre el amor. Hasta ten&iacute;a un sencillo bosquejo de cuatro puntos:</p>

<ol>
	<li>Dios le ama incondicionalmente.</li>
	<li>A usted se le ha ordenado amar a otros: a Dios, a su pr&oacute;jimo y a sus enemigos.</li>
	<li>Usted es incapaz de amar a otros por su propia cuenta.</li>
	<li>Usted puede amar a otros con el amor de Dios.</li>
</ol>

<p>Sin embargo, como ocurre en la mayor&iacute;a de los sermones sobre el amor, faltaba algo. Luego, hace algunos a&ntilde;os, fui despertado muy temprano de un profundo sue&ntilde;o. Sab&iacute;a que Dios ten&iacute;a algo que decirme. Me sent&iacute; impelido a levantarme, abr&iacute; mi Biblia y me arrodill&eacute; a leer y a orar. Lo que descubr&iacute; en las dos horas siguientes, ha enriquecido mi vida y la de miles de personas desde entonces. Hab&iacute;a aprendido c&oacute;mo amar.</p>

<p>Junto con este descubrimiento, Dios me dio el mandato de compartir esta verdad con todos los cristianos alrededor del mundo. Durante aquel tiempo especial y transformador de comuni&oacute;n con el Se&ntilde;or, yo recib&iacute; un quinto punto para agregar a mi serm&oacute;n sobre el amor: nosotros amamos por fe.</p>

<p>El amor es lo m&aacute;s extraordinario y maravilloso del mundo - Es el mayor privilegio y el m&aacute;s grande poder que el hombre conoce. El &eacute;nfasis del amor de palabra y de hecho, cambi&oacute; el curso de la historia, cuando los cristianos del primer siglo demostraron una calidad de vida que nunca se hab&iacute;a visto en esta tierra. Los griegos, los romanos, los gentiles y los jud&iacute;os se odiaban entre s&iacute;. La sola idea del amor y el sacrificio personal era completamente ajena a su pensamiento. Cuando observaban a los cristianos de diferentes naciones, con idiomas y culturas diferentes, am&aacute;ndose de verdad y sacrific&aacute;ndose para ayudar al otro, exclamaban sorprendidos, &ldquo;&iexcl;Miren c&oacute;mo esas personas se aman unos a otros!&rdquo;</p>

<p>En mi conferencia desafi&eacute; a los estudiantes a ser parte de una revoluci&oacute;n de amor. Les suger&iacute; que hicieran una lista de todas las personas que no les agradaban y que comenzar&aacute;n a amarlos por fe.</p>

<p>A la ma&ntilde;ana siguiente, muy temprano, una joven con ojos alegres y rostro radiante me dijo, &ldquo;Mi vida cambi&oacute; anoche. Por muchos a&ntilde;os hab&iacute;a odiado a mis padres. No los he visto desde que ten&iacute;a diecisiete a&ntilde;os, y ahora tengo veintid&oacute;s. Abandon&eacute; mi hogar hace cinco a&ntilde;os, luego de una pelea y nunca les volv&iacute; a hablar ni les he escrito desde entonces, a pesar de que ellos han intentado convencerme varias veces de regresar a casa. Me decid&iacute; a nunca volverlos a ver. Los odiaba.</p>

<p>&ldquo;Hace algunos meses, antes de llegar a ser cristiana&rdquo;, continu&oacute;, &ldquo;era drogadicta, vend&iacute;a estupefacientes y ca&iacute; en la prostituci&oacute;n. Anoche usted me dijo c&oacute;mo amar a mis padres, y yo apenas pod&iacute;a esperar a salir de esta reuni&oacute;n para llamarlos. &iquest;puede creerlo? Ahora realmente los amo con el amor de Dios y apenas puedo esperar para verlos&rdquo;.</p>

<p>Todo mundo desea ser amado. La mayor&iacute;a de los psic&oacute;logos est&aacute;n de acuerdo en que la necesidad m&aacute;s fuerte del hombre es amar y ser amado. Ninguna barrera puede resistir la poderosa fuerza del amor.</p>

<p>Hay tres palabras griegas que se traducen como &ldquo;amor&rdquo;: eros, que sugiere deseo sensual y la cual no aparece en el Nuevo Testamento; fileo, que es utilizada para describir la amistad o el amor de amigos y parientes, que sugiere el amar a alguien porque es digno de ese amor; y agape, que es el amor de Dios: el m&aacute;s puro, el amor m&aacute;s profundo, expresado no mediante meras emociones sino como un acto de la voluntad.</p>

<p>Agape es el amor sobrenatural e incondicional que Dios nos tiene, revelado de forma suprema en la muerte de nuestro Se&ntilde;or Jesucristo en la cruz por nuestros pecados. Es &eacute;ste el amor sobrenatural que &Eacute;l quiere producir en usted, y a trav&eacute;s de usted hacia otros, por medio de Su Esp&iacute;ritu Santo. El amor agape se fundamenta en el car&aacute;cter de la persona que ama y no en cu&aacute;n digno es el objeto de ese amor. Algunas veces es amar &ldquo;a pesar de&rdquo; en vez de &ldquo;debido a&rdquo;.</p>

<p>Dios subraya la importancia de esta clase de amor, por medio de la pluma inspirada del ap&oacute;stol Pablo en 1 Corintios 13. En este hermoso y singular pasaje de la Biblia, Pablo escribe que, sin amor, todo lo que usted pueda hacer para Dios o para los dem&aacute;s carece de valor. Considere estas palabras:</p>

<div class="quote-left">Si yo hablase lenguas humanas y ang&eacute;licas, y no tengo amor, vengo a ser como metal que resuena, o c&iacute;mbalo que reti&ntilde;e. Y si tuviese profec&iacute;a, y entendiese todos los misterios y toda ciencia y si tuviese toda la fe, de tal manera que trasladase los montes, y no tengo amor, nada soy. Y si repartiese todos mis bienes para dar de comer a los pobres, y si entregase mi cuerpo para ser quemado, y no tengo amor, de nada me sirve.</div>

<p>En otras palabras, nada de lo que usted haga por Dios o por los dem&aacute;s tiene valor a menos que est&eacute; motivado por el amor de Dios&rdquo;.</p>

</div>

<p>&nbsp;</p>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ CINCO VERDADES SOBRE EL AMOR</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p>Pero, &iquest;qu&eacute; es agape? &iquest;C&oacute;mo se expresa esta clase de amor? El ap&oacute;stol Pablo nos proporciona una descripci&oacute;n excelente:</p>

<div class="quote-right">El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no es indecoroso, no busca lo suyo, no se irrita, no guarda rencor; no se goza de la injusticia, mas se goza de la verdad. Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta. El amor nunca deja de ser; pero las profec&iacute;as se acabar&aacute;n, y cesar&aacute;n las lenguas, y la ciencia acabar&aacute;. Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor.</div>

<p>En el cap&iacute;tulo siguiente el ap&oacute;stol Pablo, inspirado por el Esp&iacute;ritu Santo, advierte: &ldquo;Seguid el amor&rdquo;. Perm&iacute;tame compartirle cinco verdades fundamentales sobre el amor, que seguramente le ayudar&aacute;n a entender los fundamentos del amar por fe.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h3>+ 1. Dios le ama incondicionalmente</h3></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc8-1.png" style="float:right; width:50%" />Dios ama con amor agape, el amor descrito en 1 Corintios 13. &Eacute;l lo ama tanto que envi&oacute; a Su Hijo a morir en la cruz por usted, para que pueda tener vida eterna. Su amor no se basa en su desempe&ntilde;o. Cristo lo ama tanto que, aun siendo usted un pecador, muri&oacute; por usted.</p>

<p>El amor de Dios por usted es incondicional e inmerecido. &Eacute;l lo ama a pesar de su desobediencia, de su debilidad, de su pecado y de su ego&iacute;smo. &Eacute;l lo ama lo suficiente como para proveerle un camino a la vida abundante y a la vida eterna. Desde la cruz Cristo exclam&oacute;, &ldquo;Padre, perd&oacute;nalos porque no saben lo que hacen&rdquo;. Si Dios amaba tanto a aquellos pecadores, &iquest;puede imaginarse cu&aacute;nto lo ama a usted, que es Su hijo por medio de la fe en Cristo y adem&aacute;s alguien que trata de agradarlo?</p>

<p>La par&aacute;bola del hijo pr&oacute;digo, tal como est&aacute; relatada en San Lucas, cap&iacute;tulo 15, ilustra el amor incondicional de Dios por Sus hijos. Un joven le pidi&oacute; a su padre que le diera la parte de la herencia que le correspond&iacute;a, empac&oacute; sus pertenencias y parti&oacute; a un pueblo lejano donde malgast&oacute; todo su dinero en fiestas y prostitutas. Cuando el dinero se le acab&oacute;, una gran escasez de alimentos asol&oacute; ese pa&iacute;s, y aquel hijo pr&oacute;digo comenz&oacute; a pasar hambre. Finalmente volvi&oacute; en s&iacute; y se dio cuenta que los empleados de su padre al menos ten&iacute;an comida. Por fin se decidi&oacute; y dijo, &ldquo;Me levantar&eacute;, ir&eacute; a mi padre, y le dir&eacute;: Padre, he pecado contra el cielo y contra ti. Ya no soy digno de ser llamado tu hijo, hazme como uno de tus jornaleros&rdquo;.</p>

<p>Cuando &eacute;l todav&iacute;a estaba lejos, su padre lo vio y se llen&oacute; de amorosa misericordia. Corri&oacute; hacia su hijo, lo abraz&oacute; y lo bes&oacute;. Yo creo que el padre vio a su hijo cuando &eacute;ste a&uacute;n estaba lejos, porque &eacute;l estaba orando por su regreso y cada d&iacute;a pasaba bastante tiempo mirando el camino solitario por el que cre&iacute;a que su hijo retornar&iacute;a.</p>

<p>A&uacute;n mientras su hijo estaba confes&aacute;ndole sus pecados, el padre lo interrumpi&oacute; para ordenar a sus siervos que mataran al becerro gordo y prepararan una fiesta pues su hijo perdido se hab&iacute;a arrepentido; hab&iacute;a cambiado de modo de pensar y hab&iacute;a retornado para ser nuevamente parte de la familia.</p>

<p>Dios demostr&oacute; Su amor por nosotros desde antes que fu&eacute;ramos cristianos. Esta historia demuestra claramente que Dios contin&uacute;a amando a aqu&eacute;llos que se han alejado de &Eacute;l desvi&aacute;ndose. &Eacute;l espera ansiosamente su retorno a la familia y a la comuni&oacute;n cristiana.</p>

<p>A pesar de que usted sea desobediente, &Eacute;l contin&uacute;a am&aacute;ndolo, esperando que usted responda a Su amor y perd&oacute;n. El ap&oacute;stol Pablo escribe:</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc8-2.png" style="float:left; width:50%" />&ldquo;Pues mucho m&aacute;s, estando ya justificados en su sangre, por &Eacute;l seremos salvos de la ira. Porque si siendo enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, mucho m&aacute;s, estando reconciliados, seremos salvos por su vida.</p>

<p>El amor que Dios tiene por usted rebasa la comprensi&oacute;n humana. Jes&uacute;s oraba &ldquo;para que todos (los disc&iacute;pulos y creyentes de todas las edades) sean uno; como t&uacute;, oh Padre, en m&iacute;, y yo en ti...Yo en ellos y T&uacute; en m&iacute;, para que sean perfectos en unidad, para que el mundo conozca que t&uacute; me enviaste, y que los has amado a ellos como tambi&eacute;n a m&iacute; me has amado&rdquo;.</p>

<p>Piense en esto. Dios lo ama tanto como ama a Su &uacute;nico Hijo amado, el Se&ntilde;or Jes&uacute;s.</p>

<p>&iexcl;Qu&eacute; verdad asombrosa y sobrecogedora para ser comprendida! Usted no debe temer a alguien que lo ama perfectamente. Usted nunca debe resistirse a confiarle a Dios toda su vida, porque &Eacute;l realmente lo ama. Y la parte m&aacute;s incre&iacute;ble de todo esto es que &Eacute;l lo ama aun cuando usted es desobediente.</p>

<p>A nivel humano encontramos un ejemplo similar en el amor que los padres demuestran por sus hijos. Yo amo a mis hijos igual cuando son desobedientes que cuando son buenos. Pensando en su propio bien, y sin embargo&nbsp;porque los amo, algunas veces consider&eacute; que era necesario corregirlos. Lo mismo sucede en su relaci&oacute;n con Dios. Cuando usted es desobediente, &Eacute;l lo disciplina y lo corrige porque lo ama.</p>

<p>En Hebreos 12 se nos ense&ntilde;a sobre el amor que motiva la disciplina de Dios:</p>

<div class="quote-left">Y hab&eacute;is ya olvidado la exhortaci&oacute;n que como a hijos se os dirige, diciendo: Hijo m&iacute;o no menosprecies la disciplina del Se&ntilde;or, ni desmayes cuando eres reprendido por &eacute;l; porque el Se&ntilde;or al que ama, disciplina, y azota a todo el que recibe por hijo. Si soport&aacute;is la disciplina, Dios os trata como a hijos; porque &iquest;qu&eacute; hijo es aquel a quien el padre no disciplina? Por otra parte, tuvimos a nuestros padres terrenales que nos disciplinaban, y los vener&aacute;bamos. &iquest;Por qu&eacute; no obedeceremos mucho mejor al Padre de los esp&iacute;ritus, y viviremos? Y aquellos, ciertamente por pocos d&iacute;as nos disciplinaban como a ellos les parec&iacute;a, pero &eacute;ste para lo que nos es provechoso, para que participemos de su santidad. Es verdad que ninguna disciplina al presente parece ser causa de gozo, sino de tristeza; pero despu&eacute;s da fruto apacible de justicia a los que en ella han sido ejercitados.</div>

<p>La muerte de Cristo en la cruz satisfizo de una vez y para siempre la ira y la justicia de Dios por el pecado del creyente. Ahora Dios lo corrige y disciplina para ayudarlo a crecer y madurar espiritualmente.</p>

<p>Los primeros cristianos soportaron gran persecuci&oacute;n, terribles dificultades y sufrimientos incre&iacute;bles. Pero Pablo les escribi&oacute;</p>

<div class="quote-right">&iquest;Qui&eacute;n nos separar&aacute; del amor de Cristo? &iquest;Tribulaci&oacute;n, o angustia, o persecuci&oacute;n, o hambre, o desnudez, o peligro, o espada? Como est&aacute; escrito: Por causa de ti somos muertos todo el tiempo; somos contados como ovejas de matadero. Antes, en todas estas cosas somos m&aacute;s que vencedores por medio de aquel que nos am&oacute;.<br />
<br />
Por lo cual estoy seguro de que ni la muerte, ni la vida, ni &aacute;ngeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podr&aacute; separar del amor de Dios, que es en Cristo Jes&uacute;s Se&ntilde;or nuestro.</div>

<p>&nbsp;</p>

<p>Un amor as&iacute; supera la capacidad de comprensi&oacute;n de nuestras mentes, pero no nuestra habilidad de experimentarlo en nuestros corazones.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h3>+ 2. A usted se le ha ordenado amar</h3></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>Cierto maestro de la ley le pregunt&oacute; a Jes&uacute;s, &ldquo;Maestro, &iquest;cu&aacute;l es el gran mandamiento en la ley?&rdquo;</p>

<p>Jes&uacute;s contest&oacute;, &ldquo;Amar&aacute;s al Se&ntilde;or tu Dios con todo tu coraz&oacute;n, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amar&aacute;s a tu pr&oacute;jimo como a ti mismo. De estos dos mandamientos depende toda la ley y los profetas&rdquo;.</p>

<p>En cierto momento en mi vida cristiana, me sent&iacute; confundido por el mandamiento de amar a Dios tan totalmente. &iquest;C&oacute;mo pod&iacute;a yo alcanzar un nivel tan elevado? Dos consideraciones muy importantes me han ayudado a desear amarlo y agradarlo completamente.</p>

<p><strong>Primero</strong>, el Esp&iacute;ritu Santo ha llenado mi coraz&oacute;n con el amor de Dios, como lo prometi&oacute;, en la ep&iacute;stola a los Romanos:</p>

<div class="quote-left">Porque el amor de Dios ha sido derramado en nuestros corazones &laquo; por el Esp&iacute;ritu Santo que nos fue dado.</div>

<p><strong>Segundo,</strong> meditando en los atributos de Dios y en las maravillas que &Eacute;l ha hecho y est&aacute; haciendo por m&iacute;, siento que mi amor por &Eacute;l est&aacute; creciendo. Yo lo amo porque &Eacute;l me am&oacute; primero.</p>

<p>&iquest;C&oacute;mo es posible que Dios me amara tanto al punto de estar dispuesto a morir por m&iacute;</p>

<p>&iquest;Por qu&eacute; Dios me escoge para ser Su hijo? &iquest;En base a qu&eacute; m&eacute;ritos personales merezco ser Su embajador para compartir las Buenas Nuevas de Su amor y perd&oacute;n al mundo?</p>

<p>&iquest;Por qu&eacute; merezco el privilegio de Su presencia constante y Su Esp&iacute;ritu Santo en m&iacute;, y Su promesa de suplir todas mis necesidades conforme a Sus riquezas en gloria? &iquest;Por qu&eacute; puedo gozar del privilegio, negado a la mayor&iacute;a de las personas del mundo que no conocen a nuestro Salvador, de levantarme cada ma&ntilde;ana con una canci&oacute;n en mi coraz&oacute;n y una alabanza en mis labios por el amor, el gozo y la paz que &Eacute;l tan generosamente da a todos los que conf&iacute;an en Su &uacute;nico Hijo, el Se&ntilde;or Jes&uacute;s?</p>

<p>Yo era un cristiano nuevo cuando le propuse matrimonio a Vonette, la que ahora es mi esposa. Ella hab&iacute;a sido miembro activo de la iglesia, sin embargo y lo descubr&iacute; despu&eacute;s, en ese tiempo ella misma no era cristiana. Imag&iacute;nese su angustia cuando, en mi celo por Cristo, le expliqu&eacute; que yo amaba a Cristo m&aacute;s de lo que la amaba a ella, y que &Eacute;l ocupar&iacute;a siempre el primer lugar en mi vida. Yo hab&iacute;a cometido el error de no explicar, ni siquiera me hab&iacute;a dado cuenta en ese tiempo, que precisamente debido a mi amor por Dios yo pod&iacute;a llegar a amarla m&aacute;s. M&aacute;s adelante, antes de casarnos, ella tambi&eacute;n experiment&oacute; el amor y perd&oacute;n de Dios y se convirti&oacute; en hija de Dios.</p>

<p>A lo largo de los a&ntilde;os, el Se&ntilde;or tambi&eacute;n ha llegado a ser el primero en la vida de mi esposa, y como &Eacute;l es ahora el primero en nuestras vidas, disfrutamos una relaci&oacute;n de amor mucho m&aacute;s profunda que la que hubi&eacute;ramos experimentado de otro modo. A pesar que mis responsabilidades en Su servicio me llevan a muchas partes del mundo y a menudo estoy lejos de Vonette y de mi hogar, nosotros encontramos nuestro pleno gozo y satisfacci&oacute;n en &Eacute;l. Los momentos en los que tenemos el privilegio de estar juntos, son de lo m&aacute;s maravillosos debido a nuestro mutuo amor por &Eacute;l y de Su amor por nosotros.</p>

<p>El que no ha aprendido a amar a Dios y a buscarlo por sobre todo y todos, es digno de compasi&oacute;n, porque esa persona est&aacute; perdiendo las bendiciones que esperan a todos los que aman a Dios con todo su coraz&oacute;n, su alma y su mente.</p>

<p>El cumplir el mandamiento de amar al pr&oacute;jimo como a s&iacute; mismo ser&aacute; algo natural, si verdaderamente ama a Dios con todo su coraz&oacute;n, su alma y su mente. Si usted mantiene una relaci&oacute;n apropiada con Dios en un plano vertical, estar&aacute; relacionado correctamente con los dem&aacute;s en el plano horizontal.</p>

<p>Por ejemplo, pensemos en las bolas de billar. Estas al rodar libremente sobre una mesa, naturalmente chocan entre s&iacute; debido a la forma que tienen. Pero si nosotros atamos cuerdas a estas esferas y las alzamos y sostenemos perpendiculares a la mesa, las bolas se agrupar&aacute;n entre s&iacute;.</p>

<p>Cuando los cristianos est&eacute;n vitalmente unidos a Cristo, bien relacionados con Dios, y est&eacute;n caminando en el Esp&iacute;ritu, am&aacute;ndolo con todo su coraz&oacute;n, alma y mente, entonces cumplir&aacute;n el mandato de Dios de amar a los dem&aacute;s como a s&iacute; mismos.</p>

<p>El ap&oacute;stol Pablo explica:</p>

<div class="quote-left">Porque: No adulterar&aacute;s, no matar&aacute;s, no hurtar&aacute;s, no dir&aacute;s falso testimonio, no codiciar&aacute;s, y cualquier otro mandamiento, en esta sentencia se resume: Amar&aacute;s a tu pr&oacute;jimo como a ti mismo.&nbsp;El amor&nbsp;no hace mal al pr&oacute;jimo; as&iacute; que el cumplimiento&nbsp;de la ley es el amor.</div>

<p>El amor por Dios y por los dem&aacute;s, es el que resulta en justicia, en fruto, y en gloria para Cristo.</p>

<p>Adem&aacute;s, se le ha ordenado amar a los dem&aacute;s, porque ese amor da testimonio de su relaci&oacute;n con el Padre celestial. Usted demuestra que pertenece a Cristo por medio de su amor a los dem&aacute;s. El ap&oacute;stol Juan pr&aacute;cticamente equipara la realidad de su salvaci&oacute;n con la forma en que usted ama a otros, cuando &eacute;l dice que si usted no ama a otros, no conoce a Dios porque Dios es amor.</p>

<p>El ap&oacute;stol Juan dice:</p>

<div class="quote-left">Pero el que tiene bienes de este mundo y ve a su hermano tener necesidad, y cierra contra &eacute;l su coraz&oacute;n, &iquest;c&oacute;mo mora el amor de Dios en &eacute;l? Hijitos m&iacute;os, no amemos de palabra ni de lengua, sino de hecho y en verdad.</div>

<p>Jes&uacute;s dice:</p>

<div class="quote-right">Este es mi mandamiento: que os am&eacute;is unos a otros, como yo os he amado.</div>

<p>Como cristiano, usted debe amar a su pr&oacute;jimo porque &eacute;ste es una criatura de Dios hecha a Su imagen; porque Dios ama a su pr&oacute;jimo; y porque Cristo muri&oacute; por su pr&oacute;jimo. Siguiendo el ejemplo de nuestro Se&ntilde;or, usted debe amar a todos, as&iacute; como Cristo lo hizo. Usted debe consagrar su vida a ayudar a otros a experimentar Su amor y perd&oacute;n.</p>

<p>Jes&uacute;s tambi&eacute;n dice:</p>

<div class="quote-left">O&iacute;steis que fue dicho: Amar&aacute;s a tu pr&oacute;jimo, y aborrecer&aacute;s a tu enemigo. Pero yo os digo: Amad a vuestros enemigos, bendecid a los que os maldicen, haced bien a los que os aborrecen, y orad por los que os ultrajan y os persiguen; para que se&aacute;is hijos de vuestro Padre que est&aacute; en los cielos, que hace salir su sol sobre malos y buenos, y que hace llover sobre justos e injustos. Porque si am&aacute;is a los que os aman, &iquest;qu&eacute; recompensa tendr&eacute;is? &iquest;No hacen tambi&eacute;n lo mismo los publicanos?</div>

<p>Cuando los cristianos comiencen a actuar como tales y amen a Dios, a sus pr&oacute;jimos, a sus enemigos y especialmente a sus hermanos cristianos, sin importar el color, raza o clase, seremos testigos en nuestro tiempo, como en el primer siglo, de una gran transformaci&oacute;n en toda la sociedad. Las personas se maravillar&aacute;n cuando observen nuestro amor, as&iacute; como se maravillaron aquellos que observaron a los creyentes del primer siglo, diciendo, &ldquo;&iexcl;C&oacute;mo se aman unos a otros&rdquo;!</p>

<p>He aconsejado a muchos j&oacute;venes estudiantes y a adultos que no pueden aceptarse a s&iacute; mismos. Algunos se sienten cargados de culpas debido a que guardan pecados sin confesar; otros no se sienten satisfechos con sus desventajas f&iacute;sicas. Hay algunos que inclusive se sienten inferiores mental y f&iacute;sicamente. Mi consejo para todos y cada uno de ellos es, &ldquo;Dios te ama y te acepta tal como eres.&rdquo; Usted debe hacer lo mismo. &iexcl;Deje de mirarse a s&iacute; mismo! Enfoque su amor y su atenci&oacute;n en Cristo y en los dem&aacute;s.</p>

<p>Comience a olvidarse de s&iacute; mismo sirvi&eacute;ndole a &Eacute;l y a los dem&aacute;s.</p>

<p>El amor de Dios es una fuerza unificadora entre los cristianos. El ap&oacute;stol Pablo advierte, &ldquo;sobre todas estas cosas vest&iacute;os de amor, que es el v&iacute;nculo perfecto&rdquo; &ldquo;Para que sean consolados sus corazones, unidos en amor&rdquo;.</p>

<p>S&oacute;lo el amor universal de Dios puede abrirse paso en medio de los problemas, y romper las barreras creadas por las diferencias humanas. S&oacute;lo una consagraci&oacute;n total a Cristo, quien es la fuente del amor, puede aliviar la tensi&oacute;n, mitigar la desconfianza, estimular la apertura, sacar lo mejor de las personas, y prepararlos para servirle juntos en forma fruct&iacute;fera.</p>

<p>Una madre me comparti&oacute; que el descubrimiento de estos principios la capacit&oacute; para ser m&aacute;s paciente y amable con su esposo y con sus hijos. &ldquo;Los ni&ntilde;os me sacaban de mis casillas con sus exigencias infantiles,&rdquo; confes&oacute;. &ldquo;Yo me mostraba irritable con ellos y como me sent&iacute;a tan infeliz, era una esposa criticona y quejosa. No era de extra&ntilde;ar que mi esposo encontrara excusas para trabajar hasta tarde en la oficina. Ahora todo es diferente. El amor de Dios satura nuestro hogar desde que yo aprend&iacute; a amar por fe&rdquo;.</p>

<p>Un esposo dijo, &ldquo;Mi esposa y yo nos hemos enamorado de nuevo, y ahora verdaderamente disfruto en mi oficina trabajando con personas que antes de aprender a amar por fe, me parec&iacute;an desagradables&rdquo;.</p>

<h3>3. Usted no puede amar en sus propias fuerzas</h3>

<p>As&iacute; como &ldquo;los que est&aacute;n en la carne (las personas mundanas, carnales) no pueden agradar a Dios,&rdquo; en sus propias fuerzas, usted tampoco puede amar como debiera.</p>

<p>Usted no puede demostrar a los dem&aacute;s el amor &aacute;gape, el amor incondicional de Dios, a trav&eacute;s de sus propios esfuerzos. &iquest;Cu&aacute;ntas veces usted se decidi&oacute; a amar a alguien? &iquest;Con cu&aacute;nta frecuencia ha intentado simular un sentimiento positivo y de amor hacia alguna persona, por la cual no siente nada? Es imposible, &iquest;no es cierto? Basado s&oacute;lo en sus propias fuerzas no se puede amar con el amor de Dios.</p>

<div class="block-quote">Usted no puede demostrar a los dem&aacute;s el amor &aacute;gape, el amor incondicional de Dios, a trav&eacute;s de sus propios esfuerzos.</div>

<p>Por naturaleza los seres humanos no somos ni pacientes ni amables. Somos celosos, envidiosos y jactanciosos. Somos orgullosos, altivos, ego&iacute;stas, rudos, y exigimos que las cosas se hagan a nuestra manera. &iexcl;Nosotros no podemos amar a los dem&aacute;s como Dios nos ama!</p>

<h3>4. Usted puede amar con el amor de Dios</h3>

<p>El amor de Dios fue el que lo trajo a Cristo. Un amor as&iacute; es el que puede sostenerlo y animarlo cada d&iacute;a. Mediante Su amor en usted, es posible atraer a otros a Cristo y aun servirles a sus amigos creyentes, como Dios le ha ordenado.</p>

<p>El amor de Dios estuvo expresado de modo supremo en la vida de Cristo. Usted tiene un panorama completo del amor de Dios en el nacimiento, car&aacute;cter, ense&ntilde;anzas, vida, muerte y resurrecci&oacute;n de Su Hijo Jesucristo.</p>

<p>&iquest;C&oacute;mo entra este amor a su vida? Se hace suyo en el momento en que usted recibe a Jesucristo y el Esp&iacute;ritu Santo entra en su vida. La Biblia dice, &laquo;porque el amor de Dios ha sido derramado en nuestros corazones por el Esp&iacute;ritu Santo que nos fue dado&raquo;.</p>

<p>Dios es Esp&iacute;ritu y el &ldquo;fruto del Esp&iacute;ritu es amor...&rdquo;</p>

<p>Cuando usted es controlado por el Esp&iacute;ritu Santo, puede amar con el amor de Dios.</p>

<p>Cuando Cristo viene a su vida y usted llega a ser cristiano, Dios le proporciona los recursos para ser una persona diferente. Con la motivaci&oacute;n, &Eacute;l tambi&eacute;n le da la habilidad. &Eacute;l le provee una nueva clase de amor.</p>

<p>Pero, &iquest;qu&eacute; pasos se siguen para que el amor sea una realidad pr&aacute;ctica en su vida?</p>

<p>&iquest;C&oacute;mo se ama? &iquest;Tan solo determin&aacute;ndose a hacerlo? &iquest;Imponi&eacute;ndose esa disciplina? De ninguna manera. La &uacute;nica forma de amar est&aacute; explicada en el punto final de mi bosquejo.</p>

<h3>5. Usted ama por fe</h3>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc8-3.png" style="float:right; width:50%" />Todo lo que tiene que ver con la vida cristiana, se basa en la fe. Usted ama por fe, as&iacute; como cuando recibi&oacute; a Cristo por fe, as&iacute; como cuando es lleno del Esp&iacute;ritu Santo por fe, y as&iacute; como cuando camina por fe.</p>

<p>Si el fruto del Esp&iacute;ritu Santo es amor, es l&oacute;gico que usted se pregunte, &ldquo;&iquest;No es suficiente estar lleno del Esp&iacute;ritu?&rdquo; Esto puede ser correcto desde el punto de vista de Dios, pero no siempre lo ser&aacute; en lo concerniente a su experiencia presente.</p>

<p>Muchos cristianos han amado con el amor de Dios y han demostrado el fruto del Esp&iacute;ritu en sus vidas sin pedir, consciente ni espec&iacute;ficamente, Su amor por fe. Sin embargo, sin darse cuenta del hecho, ellos en efecto estaban amando por fe; en consecuencia, no creen que sea necesario pedir el amor de Dios por fe, como un acto espec&iacute;fico.</p>

<p>En Hebreos 11:6 se nos dice, &ldquo;sin fe es imposible agradar a Dios&rdquo;. De seguro entonces que donde no hay fe, no habr&aacute; ninguna demostraci&oacute;n del amor de Dios.</p>

<p>Si a usted le resulta dif&iacute;cil amar a otros, recuerde que Jes&uacute;s orden&oacute;, &ldquo;Amaos los unos a los otros como yo os he amado&rdquo;. Amar es la voluntad de Dios para usted. El no le ordenar&iacute;a hacer algo para lo cual no lo capacita primero. En 1 Juan 5:14,15, Dios promete que si usted pide algo conforme a su voluntad, &Eacute;l oye y responde.</p>

<p>Relacionando esta promesa con el mandamiento de Dios, usted puede pedir por fe el privilegio de amar con el amor de Dios.</p>

<p>Dios tiene a su disposici&oacute;n una provisi&oacute;n inagotable de Su divino y sobrenatural amor &aacute;gape. Es para que usted lo pida, para que crezca en &eacute;l, para que lo derrame a otros y as&iacute; alcance a cientos y a miles con el amor que vale, el amor que los traer&aacute; a Jesucristo.</p>

<p>Para experimentar y compartir este amor, debe pedirlo por fe; es decir, debe confiar en Su promesa de que Dios le dar&aacute; todo lo que necesita para hacer su voluntad, con base en Su mandamiento y de Su promesa.</p>

<p>Esta verdad no es nueva. Est&aacute; esculpida en la Palabra de Dios desde hace dos mil a&ntilde;os, pero fue un nuevo descubrimiento para m&iacute; aquella ma&ntilde;ana a&ntilde;os atr&aacute;s, y desde ese momento, para muchos miles de cristianos con quienes la he compartido. Cuando comenc&eacute; a practicar el amar por fe, me di cuenta que los problemas de tensi&oacute;n con otras personas parec&iacute;an desaparecer, a menudo milagrosamente.</p>

<div class="block-quote">Para experimentar y compartir este amor, debe pedirlo por fe; es decir, debe confiar en Su promesa de que Dios le dar&aacute; todo lo que necesita para hacer su voluntad, con base en Su mandamiento y de Su promesa.</div>

<p>En cierta oportunidad, tuve problemas para amar a un colega de ministerio cristiano. Eso me confund&iacute;a. Yo quer&iacute;a amarlo. Yo sab&iacute;a que se me hab&iacute;a ordenado amarlo. Sin embargo, debido a ciertas &aacute;reas de inconsistencia y a nuestras diferentes personalidades, me era dif&iacute;cil amarlo. El Se&ntilde;or me recordaba en 1 de Pedro 5:7 &ldquo;echando toda vuestra ansiedad sobre &eacute;l, porque &eacute;l tiene cuidado de vosotros&rdquo;.</p>

<p>Entonces decid&iacute; entregarle a &Eacute;l este problema y amar a este hombre por fe. Cuando ped&iacute; por fe el amor de Dios por este hombre, mi preocupaci&oacute;n desapareci&oacute;. Yo sab&iacute;a que el problema estaba ya en las manos de Dios.</p>

<p>Una hora despu&eacute;s encontr&eacute; debajo de mi puerta una carta de este hombre, para quien era imposible saber lo que yo reci&eacute;n hab&iacute;a experimentado. En efecto, su carta hab&iacute;a sido escrita el d&iacute;a anterior. El Se&ntilde;or hab&iacute;a previsto mi cambio. Este amigo y yo nos reunimos esa tarde y tuvimos el tiempo de oraci&oacute;n y comuni&oacute;n m&aacute;s maravilloso que cualquiera de los que hubi&eacute;ramos podido experimentar por nuestra cuenta. Amar con el amor de Dios por fe, hab&iacute;a hecho la diferencia en nuestra relaci&oacute;n.</p>

<p>Dos destacados abogados ten&iacute;an una fuerte animosidad. Es m&aacute;s, se odiaban. A pesar de que ambos eran miembros distinguidos de la misma firma, se criticaban constantemente y se hac&iacute;an la vida infeliz el uno al otro.</p>

<p>Uno de estos hombres recibi&oacute; a Cristo por medio de nuestro ministerio y algunos meses despu&eacute;s vino a buscar consejo.</p>

<p>&ldquo;Yo he odiado y criticado a mi compa&ntilde;ero por a&ntilde;os&rdquo;, dijo, &ldquo;y &eacute;l tambi&eacute;n ha sido mi enemigo. Pero ahora que soy cristiano, no me siento bien de seguir con esta guerra personal. &iquest;Qu&eacute; debo hacer?&rdquo;</p>

<p>&ldquo;&iquest;Por qu&eacute; no le pides a tu colega que te perdone y le dices que le amas?&rdquo; le suger&iacute;. &ldquo;&iexcl;Jam&aacute;s podr&iacute;a hacer eso!&rdquo; exclam&oacute;. &ldquo;Eso ser&iacute;a hipocres&iacute;a. Yo no lo amo. &iquest;C&oacute;mo puedo decirle que lo amo si eso no es verdad?&rdquo;</p>

<p>Le expliqu&eacute; que Dios ordena a sus hijos que amen aun a sus enemigos y que Su amor &aacute;gape, incondicional y sobrenatural es una expresi&oacute;n de nuestra voluntad, la cual ejercitamos por fe.</p>

<p>Por ejemplo, el amor de 1 Corintios 13 es:</p>

<div class="quote-left">...sufrido, benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no es indecoroso, no busca lo suyo, no se irrita, no guarda rencor; no se goza de la injusticia, mas se goza de la verdad.</div>

<p>Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.</p>

<p>&ldquo;Usted se dar&aacute; cuenta&rdquo;, le expliqu&eacute;, &ldquo;que cada una de estas descripciones del amor no es una expresi&oacute;n de las emociones, sino de la voluntad&rdquo;.</p>

<p>Nos arrodillamos juntos a orar y mi amigo le pidi&oacute; perd&oacute;n a Dios por su actitud de cr&iacute;tica hacia su colega y pidi&oacute; el amor de Dios por fe.</p>

<p>A la ma&ntilde;ana siguiente, mi amigo camin&oacute; hacia la oficina de su colega y le cont&oacute;, &ldquo;Me ha sucedido algo maravilloso. Me hice cristiano. Hoy vine a pedirte perd&oacute;n por todo el da&ntilde;o que te hice en el pasado y a decirte que te aprecio&rdquo;.</p>

<p>Su colega estaba tan sorprendido y convencido de su propio pecado que respondi&oacute; a esta sorprendente confesi&oacute;n, pidi&eacute;ndole perd&oacute;n a mi amigo. Luego, para sorpresa de mi amigo, su colega le dijo, &ldquo;Me gustar&iacute;a tambi&eacute;n llegar a ser cristiano.</p>

<p>&iquest;quisieras mostrarme qu&eacute; es o qu&eacute; necesito hacer?&raquo;</p>

<p>Luego mi amigo le mostr&oacute; c&oacute;mo llegar a ser cristiano, present&aacute;ndole el mensaje contenido en las Cuatro Leyes Espirituales. Luego se arrodillaron juntos a orar.</p>

<p>Despu&eacute;s ambos vinieron a verme y me contaron este maravilloso milagro del amor de Dios.</p>

<p>Un asistente especial de un antiguo gobernador de California, visit&oacute; una vez nuestras oficinas en Arrowhead Springs. Durante su visita &eacute;l recibi&oacute; a Cristo como Salvador y Se&ntilde;or. Pronto comenz&oacute; a descubrir c&oacute;mo amar por fe. Recientemente su hijo hab&iacute;a abandonado el hogar despu&eacute;s que tuvieron una discusi&oacute;n. Examinando este problema, este nuevo cristiano se di&oacute; cuenta que &eacute;l nunca le hab&iacute;a dicho a su hijo que lo amaba. En el camino de regreso a su hogar, le pidi&oacute; al Se&ntilde;or que trajera a su hijo al hogar para que &eacute;l pudiera enmendar sus errores. Quer&iacute;a expresarle su amor. Cuando &eacute;l estaba llegando a su hogar, su coraz&oacute;n dio un vuelco. &iexcl;La luz del piso superior indicaba que su hijo hab&iacute;a retornado a casa! Enseguida, padre e hijo se abrazaron, se reconciliaron, y establecieron una relaci&oacute;n nueva basada en el amor perdonador de Dios.</p>

<p>Un joven universitario jugador de f&uacute;tbol, hab&iacute;a crecido en una comunidad donde las personas de color eran rechazadas. Por esta raz&oacute;n, para &eacute;l siempre hab&iacute;a sido imposible amar a las personas de color. Una noche &eacute;l me oy&oacute; hablar a un grupo racialmente heterog&eacute;neo de estudiantes acerca de amar por fe, poniendo un &eacute;nfasis especial en amar a las personas de otras razas.</p>

<p>&ldquo;Mientras usted oraba&rdquo;, me dijo m&aacute;s tarde, &ldquo;yo le ped&iacute; a Dios que me ense&ntilde;ara a amar a las personas de color. Luego, cuando me marchaba del auditorio, la primera persona que vi fue a un hombre de color que estaba hablando con una joven blanca. Esa era la situaci&oacute;n m&aacute;s enojosa que usted pueda imaginar para un hombre que odia a las personas de color. Pero, de pronto sent&iacute; compasi&oacute;n por ese hombre! En otro tiempo, lo habr&iacute;a detestado y probablemente me habr&iacute;a enojado y habr&iacute;a sido rudo con &eacute;l. Pero Dios oy&oacute; mi oraci&oacute;n&rdquo;.</p>

<p>Esa misma noche una pareja de j&oacute;venes de color se me acerc&oacute; en el pasillo del hotel Arrowhead Springs, en California. Se ve&iacute;an radiantes.</p>

<div class="block-quote">El amor es el m&aacute;s grande poder que el hombre ha conocido. El amor ha cambiado el curso de la historia del mundo del primer siglo de la era cristiana. Dios est&aacute; us&aacute;ndolo para traer una nueva revoluci&oacute;n en el siglo veinte. Nada puede vencer al amor de Dios.</div>

<p>&ldquo;Algo maravilloso me pas&oacute; anoche&rdquo;, dijo la joven. &ldquo;Fui liberada del odio que sent&iacute;a contra los blancos. Yo odiaba a los hombres blancos desde que era una ni&ntilde;a. Sab&iacute;a que como cristiana deber&iacute;a amarlos, pero no pod&iacute;a ayudarme a m&iacute; misma. Odiaba a los blancos y quer&iacute;a vengarme. Anoche comenc&eacute; a amarlos por fe. Esto realmente da resultado&rdquo;.</p>

<p>El joven agreg&oacute;, &ldquo;Tambi&eacute;n dio resultado en m&iacute;; ahora mi odio por los blancos ha desaparecido. Gracias por ense&ntilde;arnos c&oacute;mo amar por fe&rdquo;.</p>

<p>Hombres blancos que odiaban a las personas de color y personas de color que odiaban a los blancos, han descubierto el amor sobrenatural de Dios por ellos. Los esposos cristianos que estaban viviendo en conflicto, han pedido al amor de Dios por fe y tambi&eacute;n han visto surgir milagros. Los problemas entre padres e hijos han sido resueltos y la brecha generacional ha sido cubierta, amando por fe.</p>

<p>Los conflictos en el trabajo han sido resueltos. Los enemigos dejan de ser enemigos, cuando usted los ama por fe. El amor de Dios tiene el poder de disolver los prejuicios y de romper las barreras</p>

<p>El amor es el m&aacute;s grande poder que el hombre ha conocido. El amor ha cambiado el curso de la historia del mundo del primer siglo de la era cristiana. Dios est&aacute; us&aacute;ndolo para traer una nueva revoluci&oacute;n en el siglo veinte. Nada puede vencer al amor de Dios.</p>

<p>En el primer siglo de nuestra era, se produjo una uni&oacute;n del amor y la fe que di&oacute; como resultado una gran revoluci&oacute;n espiritual en todo el mundo conocido. Luego esa uni&oacute;n se perdi&oacute; al final de la Edad Media. El descubrimiento de Mart&iacute;n Lutero y sus colegas de que &ldquo;el justo por la fe vivir&aacute;&rdquo; fue el punto de partida de la Reforma Protestante y de otros movimientos poderosos del Esp&iacute;ritu de Dios, pero hubo poco amor. En verdad, fueron muchos los conflictos que caracterizaron esta &eacute;poca.</p>

<p>Hoy, Dios quiere recordarnos la uni&oacute;n b&iacute;blica de los dos - la fe y el amor-. Por medio de la fe, ese divino y sobrenatural amor de Dios alcanzar&aacute; los lugares cuyo acceso parece imposible, para capturar a hombres y mujeres para Cristo. El amor que resulta de esa fe cautivar&aacute; a las personas en todas partes, de tal forma, que mientras nosotros vivamos y amemos por fe, propagaremos el amor de Dios por todo el mundo. Este amor es contagioso, atractivo y agresivo. Crea verdadera hambre de Dios. Es activo - est&aacute; buscando constantemente cosas amorosas que hacer, personas que inspirar y vidas que cambiar.</p>

<div class="block-quote">&ldquo;Pero la noche que recib&iacute; a Cristo&rdquo;, cuenta, &ldquo;estaba tan lleno de amor que creo que aun el perro percibi&oacute; que yo era diferente. Se movi&oacute; sobre su barriga y se arrastr&oacute; hacia m&iacute;. Se acost&oacute; sobre los mismos pies que noches antes lo hab&iacute;an pateado&rdquo;.</div>

<p>Leonardo es un ejemplo. La noche que &eacute;l recibi&oacute; a Cristo como su Salvador personal, su coraz&oacute;n se llen&oacute; de amor, y se produjo un gran cambio en &eacute;l. Hasta entonces &eacute;l hab&iacute;a odiado a todos y a todo.</p>

<p>A menudo, cuando por las noches llegaba borracho a su hogar, pateaba a su perro para sacarlo del portal. En el proceso, el perro ladraba, gru&ntilde;&iacute;a e intentaba morderlo, tambale&aacute;ndose y temblando bajo la influencia del alcohol, Leonardo persegu&iacute;a al perro alrededor de la mesa del patio.</p>

<p>Enseguida se agregaba su esposa a la pelea. Comenzaban a insultarse mutuamente y se peleaban. Eventualmente, &eacute;l pateaba al perro y lo arrojaba fuera del portal, desparramando sillas y floreros por todos lados.</p>

<p>&ldquo;Pero la noche que recib&iacute; a Cristo&rdquo;, cuenta, &ldquo;estaba tan lleno de amor que creo que aun el perro percibi&oacute; que yo era diferente. Se movi&oacute; sobre su barriga y se arrastr&oacute; hacia m&iacute;. Se acost&oacute; sobre los mismos pies que noches antes lo hab&iacute;an pateado&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ D&Eacute; EL PASO</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>El amor &aacute;gape se expresa frecuentemente como un rebosar de compasi&oacute;n. Jes&uacute;s dijo, &ldquo;el que cree en m&iacute;, como dice la Escritura, de su interior correr&aacute;n r&iacute;os de agua viva&rdquo;.</p>

<p>La compasi&oacute;n es uno de esos r&iacute;os. Es un torrente de afecto y preocupaci&oacute;n por las necesidades de otras personas. Tal amor impuls&oacute; a Jes&uacute;s a saciar el hambre, a aliviar la tristeza, a sanar la enfermedad, a ense&ntilde;ar a las multitudes y a levantarse de la muerte.</p>

<p>En algunos momentos de nuestra vida, la mayor&iacute;a de nosotros hemos experimentado este fluir de amor hacia alguien.</p>

<p>Tal vez usted lo sinti&oacute; mientras lavaba los platos, o mientras trabajaba, o conduc&iacute;a en la carretera, o estaba sentado en el aula. Usted no pod&iacute;a explic&aacute;rselo pero su impulso era de hacer algo especial por una persona.</p>

<p>Yo le animo a tomar el primer paso; comience a amar por fe y siga ese fluir. La compasi&oacute;n de Dios fluir&aacute; hacia el que est&eacute; en necesidad. El impulso del amor en usted, significa que &Eacute;l est&aacute; llen&aacute;ndolo con compasi&oacute;n santa y que &Eacute;l lo ha escogido para servirle a esa persona.</p>

<p>P&iacute;dale a Dios que de alguna forma manifieste su tierna compasi&oacute;n a trav&eacute;s de usted el d&iacute;a de hoy. Cuando ore, p&iacute;dale que ponga a alguien en su coraz&oacute;n. Cuando sienta el amor de Dios fluyendo a trav&eacute;s de usted hacia esa persona, descubra sus necesidades y comience a servirle en esa necesidad. Siguiendo la gu&iacute;a del Esp&iacute;ritu Santo,&nbsp;usted puede ayudar a quienes el Se&ntilde;or ha preparado para experimentar Su toque transformador y as&iacute; ser&aacute; parte de Su maravillosa provisi&oacute;n. Cuando Dios le gu&iacute;e a ayudar a alguien, &Eacute;l lo capacitar&aacute; para cumplir lo que le ha ordenado.</p>

<p>Una revista japonesa tiene un dibujo de una mariposa en una de sus p&aacute;ginas. Su color es un gris oscuro hasta que una persona le pasa la mano. El toque de una mano hace que la tinta especial utilizada en la impresi&oacute;n reaccione y el gris oscuro se transforma en un brillante arco iris de color.</p>

<p>&iquest;Qu&eacute; otras cosas podr&iacute;an ser cambiadas por el c&aacute;lido toque de su inter&eacute;s y de su amor &aacute;gape? &iquest;Su familia, quiz&aacute;s? &iquest;Su ciudad, tal vez? Este mundo herido, sigue hambriento por experimentar el toque de alguien que se interese, &iexcl;que realmente se interese! A trav&eacute;s del amor &aacute;gape de Dios, usted puede ser ese alguien.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ HAGA UNA LISTA</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->
<p>&iquest;Pero qu&eacute; sucede con aqu&eacute;llos que nos parecen muy dif&iacute;ciles? Son esas personas con las que usted no puede congeniar. Individuos cuyas actitudes lo llevan al camino errado. Yo le animo a hacer una lista de personas que a usted no le agradan y que comience a amarlos por fe. Tal vez usted mismo se colocar&aacute; en la lista. &iquest;Ha pensado en aplicarse a s&iacute; mismo las verdades de 1 Corintios 13 por fe? P&iacute;dale a Dios que le ayude a verse como &Eacute;l lo ve. Usted no tiene raz&oacute;n para no amarse, si, Su creador ya lo ha perdonado y le ha demostrado Su amor incondicional muriendo por usted.</p>

<p>Si Cristo est&aacute; en usted, usted est&aacute; completo porque Cristo mismo es el amor perfecto, la paz perfecta, la paciencia perfecta, la bondad perfecta. &Eacute;l es todo bondad y &Eacute;l est&aacute; en usted.</p>

<p>Siempre que Satan&aacute;s intente atacarlo record&aacute;ndole los pecados que usted ya ha confesado, o exagerando sus debilidades y defectos, pida en fe el perd&oacute;n y la justicia de Dios. Agrad&eacute;zcale al Se&ntilde;or porque, seg&uacute;n la autoridad de Su Palabra, usted no puede ser intimidado por las acusaciones de Satan&aacute;s. Agrad&eacute;zcale a Dios que usted es Su hijo y porque sus pecados han sido perdonados. Agrad&eacute;zcale a Dios que Satan&aacute;s no tiene control sobre usted, excepto hasta donde Dios permite. Luego, eche toda su preocupaci&oacute;n sobre el Se&ntilde;or como &Eacute;l lo orden&oacute; en 1 Pedro 5:7.</p>

<p>En la lista de las personas a las que usted amar&aacute; por fe, quiz&aacute;s se encuentre su jefe, un compa&ntilde;ero de trabajo, su c&oacute;nyuge, sus hijos o sus padres. Ore por cada uno de ellos. P&iacute;dale al Esp&iacute;ritu Santo que lo llene con el amor que Cristo les tiene. Luego, intente reunirse con ellos mientras apropia el amor ilimitado, inagotable y sobrecogedor de Dios por estas personas. Espere que Dios obre a trav&eacute;s de usted.</p>

<p>Observe c&oacute;mo &Eacute;l usa su sonrisa, sus palabras y su paciencia para expresar Su amor por cada persona.</p>

<p>Ame por fe a todos sus &ldquo;enemigos&rdquo;, a todo el que lo haga enojar, al que lo ignore, lo moleste y lo frustre. Las personas est&aacute;n esperando ser amadas con el amor de Dios.</p>

<div class="block-quote">Si Cristo est&aacute; en usted, usted est&aacute; completo porque Cristo mismo es el amor perfecto, la paz perfecta, la paciencia perfecta, la bondad perfecta. &Eacute;l es todo bondad y &Eacute;l est&aacute; en usted.</div>

<p>Un ama de casa, quien durante un largo y fr&iacute;o invierno, hab&iacute;a visto a su familia pasar por las paperas, el sarampi&oacute;n, una nariz quebrada, tres nuevos dientes del beb&eacute; e innumerables dificultades, lleg&oacute; al punto donde estas presiones y demandas fueron ya demasiado para ella finalmente, de rodillas, comenz&oacute; a protestar, &ldquo;&iexcl;Oh, Se&ntilde;or, tengo tanto que hacer!&rdquo; Pero imag&iacute;nese su sorpresa cuando ella misma se oy&oacute; decir, &ldquo;&iexcl;Oh, Se&ntilde;or, tengo tanto que amar!&rdquo; Usted nunca se quedar&aacute; sin oportunidades para amar por fe.</p>

<p>Recuerde, el amor &aacute;gape es un acto de la voluntad, no s&oacute;lo una emoci&oacute;n. Usted ama por fe. Por fe, usted puede pedir el amor de Dios paso a paso, persona tras persona.</p>

<p>&ldquo;El fruto del esp&iacute;ritu es amor..&rdquo;. Como un fruto, el amor crece. Para producir frutos se requiere primero de una semilla, luego de una flor, luego de la polinizaci&oacute;n, luego del calor del sol y las lluvias refrescantes, e inclusive de vientos contrarios. De la misma forma en la vida diaria, su amor recibir&aacute; el calor del gozo, ser&aacute; mojado por l&aacute;grimas y ser&aacute; desparramado por los vientos de las circunstancias.</p>

<p>Dios usa todas sus experiencias para obrar Su divina voluntad en su vida &Eacute;l es quien hace crecer su amor. Es un proceso continuo, siempre creciente. Como Pablo dice, &ldquo;Y el Se&ntilde;or os haga crecer y abundar en amor unos para con otros y para con todos..&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ PERMITA QUE EL AMOR LO MOTIVE</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->
<p>Ahora, &iquest;c&oacute;mo lo motiva el amar por fe a participar en la evangelizaci&oacute;n personal y a contribuir en el cumplimiento de la Gran Comisi&oacute;n?</p>

<p>Cuando usted comience verdaderamente a amar a Dios por fe, con todo su coraz&oacute;n, con toda su alma, con toda su mente y con todas sus fuerzas y cuando ame a su pr&oacute;jimo como a usted mismo, comenzar&aacute; a ver a la gente como Dios la ve, como personas de gran valor, como aquellos por quienes Cristo muri&oacute;. Como resultado, seremos motivados por el mismo amor que constre&ntilde;&iacute;a al ap&oacute;stol Pablo, quien dijo, &ldquo;amonestando a todo hombre, y ense&ntilde;ando a todo hombre en toda sabidur&iacute;a, a fin de presentar perfecto en Cristo Jes&uacute;s a todo hombre&rdquo;.</p>

<p>El amor, el gran amor de Dios, hace que la Gran Comisi&oacute;n se constituya en un privilegio y en una responsabilidad personal. Cuando los no-cristianos observan que los creyentes no s&oacute;lo dicen que se aman entre s&iacute; sino que tambi&eacute;n lo demuestran a trav&eacute;s de sus acciones, ellos, como sus cong&eacute;neres del primer siglo, se maravillar&aacute;n de ver &ldquo;c&oacute;mo se aman mutuamente&rdquo; y ser&aacute;n guiados a recibir y a adorar a nuestro Salvador junto con nosotros.</p>

<p>&iexcl;Cu&aacute;n emocionante es tener un poder as&iacute; din&aacute;mico y gozoso, y disponible para nosotros! Y todo viene de nuestro amoroso Salvador, Jesucristo, quien le promete claramente en Su palabra todo lo que usted necesita. Usted no debe s&oacute;lo esperar, ni s&oacute;lo desear, ni s&oacute;lo querer. Usted puede pedir este amor por fe, ahora mismo, bas&aacute;ndose en el mandato de Dios de amar, y en base a su promesa de responder cualquier cosa que usted pida conforme a Su voluntad.</p>

<p>Le invito a orar de la siguiente manera: &ldquo;Se&ntilde;or, T&uacute; nunca me hubieras ordenado amar, sin capacitarme para hacerlo. Por lo tanto, ahora mismo y bas&aacute;ndome en la autoridad del mandamiento que me das de amar y en la autoridad de Tu promesa que me asegura que respondes si pido algo conforme a Tu voluntad, pido Tu amor, el amor de 1 Corintios 13, para amarte a ti, para amar a las dem&aacute;s personas, y para aceptarme y amarme a mi mismo. Am&eacute;n&rdquo;.</p>

<div class="block-quote">El amor, el gran amor de Dios, hace que la Gran Comisi&oacute;n se constituya en un privilegio y en una responsabilidad personal. Cuando los no-cristianos observan que los creyentes no s&oacute;lo dicen que se aman entre s&iacute; sino que tambi&eacute;n lo demuestran a trav&eacute;s de sus acciones, ellos, como sus cong&eacute;neres del primer siglo, se maravillar&aacute;n de ver &ldquo;c&oacute;mo se aman mutuamente&rdquo; y ser&aacute;n guiados a recibir y a adorar a nuestro Salvador junto con nosotros.</div>

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

			<td class="social" @click="share('lesson', '¿CÓMO PUEDE  USTED AMAR  POR FE?: ', '/content/M2/spa/tc/tc08.html')">
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
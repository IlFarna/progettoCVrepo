var client = contentful.createClient({
  space: '1bwizuri0144',
  accessToken: 'H-sZZeHmspsUfce3qVErjKx1BlkhTEjOVEWjQ9DRfH4'
});

client.getEntry('6GMUC5JTHOwbFf2WFk5YnL').then((entry) => {
  // logs the entry metadata
  console.log(entry.sys);

  // logs the field with ID title
  console.log(entry.fields);

  const data = entry.fields;
  const converter = new showdown.Converter({tables: true});
  $("#name").text(data.nome + ' ' + data.cognome);
  $("#address").text(data.indirizzo);
  $("#phone").text(data.cellulare);
  $("#email").text(data.email);
  $("#titles").html(converter.makeHtml(data.titoloDiStudio));
  $("#works").html(converter.makeHtml(data.esperienzeLavorative));
  $("#studies").html(converter.makeHtml(data.istruzioneEFormazione));
  $("#languages").html(converter.makeHtml(data.lingue));
  $("#personal_skills").html(converter.makeHtml(data.competenzePersonali));
  $(".elabinfo").attr("data-level", data.skillsInformatiche + '%');
  $("#drivelicence").text(data.patente);
  renderSkills();
});


var formClient = contentfulManagement.createClient({
	accessToken: 'CFPAT-Ij9QRNQ27BuEQaiIFmEzaeXK95YwLQAAzq_Qxjq2G6k'
});
function NewEntry () {

formClient.getSpace('1bwizuri0144')
.then(space => space.getEnvironment('master')
	.then(env => env.createEntry('offerteDiLavoro', {
		fields: {
			referente: {
				'it-IT': $('#R').val(), 
			},
			ragioneSociale: {
				'it-IT': $('#RS').val(),
			},
			email: {
				'it-IT': $('#E').val()
			},
			note: {
				'it-IT': $('#N').val()
			},
		}
	}).then(() => FormresetO())));
$('#contactme').modal('toggle');
};
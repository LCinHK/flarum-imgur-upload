import SettingsModal from 'flarum/components/SettingsModal';

export default class ImgurUploadSettingsModal extends SettingsModal {
	className() {
		return 'ImgurUploadSettingsModal Modal--small';
	}

	title() {
		return app.translator.trans('imgur-upload.admin.settings.title');
	}

	form() {
		return [
			<div className="Form-group">
				<label>Imgur Client ID</label>
				<input className="FormControl" bidi={this.setting('imgur-upload.client-id')}/>
        <label>{app.translator.trans('imgur-upload.admin.settings.API-URL')}</label>
        <input className="FormControl"  bidi={this.setting('imgur-upload.API-URL','https://api.imgur.com/v3/upload')}/>
        <label>{app.translator.trans('imgur-upload.admin.settings.image-URL')}</label>
        <input className="FormControl"  bidi={this.setting('imgur-upload.image-URL','https://i.imgur.com')}/>
			</div>
		];
	}
}

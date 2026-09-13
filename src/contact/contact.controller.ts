import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { BUSINESS, NAV_LINKS } from '../common/site-data';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // API endpoint (JSON) — used by fetch() from the contact page & consultation modal
  @Post('api/contact')
  async submitApi(@Body() dto: CreateContactDto) {
    const saved = await this.contactService.create(dto);
    return { success: true, id: saved._id };
  }

  // Classic form POST fallback (progressive enhancement, no-JS)
  @Post('contact')
  async submitForm(
    @Body() dto: CreateContactDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.contactService.create(dto);
    if (req.headers.accept?.includes('application/json')) {
      return res.json({ success: true });
    }
    return res.redirect('/thank-you');
  }

  @Get('thank-you')
  @Render('pages/thank-you')
  thankYou() {
    return {
      title: `Thank You | ${BUSINESS.name}`,
      business: BUSINESS,
      nav: NAV_LINKS,
      active: '',
    };
  }
}

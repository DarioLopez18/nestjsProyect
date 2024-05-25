import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // Asegúrate de la ruta correcta

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

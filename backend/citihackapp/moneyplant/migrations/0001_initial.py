# Generated by Django 4.1 on 2022-08-09 06:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('description', models.TextField()),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Industry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('esgScore', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='ESGInitiatives',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('upvotes', models.PositiveIntegerField()),
                ('downvotes', models.PositiveIntegerField()),
                ('created', models.DateTimeField(auto_now=True)),
                ('resourceLink', models.TextField()),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='esgInitiatives', to='moneyplant.company')),
            ],
            options={
                'ordering': ['created'],
            },
        ),
        migrations.AddField(
            model_name='company',
            name='industry',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='companies', to='moneyplant.industry'),
        ),
    ]
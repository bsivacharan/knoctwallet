import { CredentialRecord } from '@aries-framework/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

import { dateFormatOptions } from '../../constants'
import { ColorPallet, TextTheme } from '../../theme'
import { parsedSchema } from '../../utils/helpers'

import AvatarView from './AvatarView'

import Title from 'components/texts/Title'

interface CredentialCardProps {
  credential: CredentialRecord
  style?: ViewStyle
}

const styles = StyleSheet.create({
  container: {
    minHeight: 125,
    backgroundColor: ColorPallet.brand.secondaryBackground,
    justifyContent: 'center',
    borderRadius: 15,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: { flexShrink: 1 },
})

const CredentialCard: React.FC<CredentialCardProps> = ({ credential, style = {} }) => {
  const { t } = useTranslation()

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <AvatarView name={parsedSchema(credential).name} />
        <View style={styles.details}>
          <Title>{parsedSchema(credential).name}</Title>
          <Text style={{ ...TextTheme.caption }}>
            {t('CredentialDetails.Version')}: {parsedSchema(credential).version}
          </Text>
          <Text style={{ ...TextTheme.caption }}>
            {t('CredentialDetails.Issued')}: {credential.createdAt.toLocaleDateString('en-CA', dateFormatOptions)}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default CredentialCard
